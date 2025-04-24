import { z } from "zod";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, Message, tool, generateText } from "ai";


import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
 
import { Pinecone } from "@pinecone-database/pinecone";
import { MainPrompt2 } from "./_components/prompts";
import { MailSend } from "./_components/send-mail";
import { db } from "@/prisma/db";
import { execl } from "./_components/excelpromt";


// Google Generative AI setup
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY as string,
});


export const runtime = "nodejs";

const model = google("gemini-2.0-flash");
// const model1 = google.textEmbeddingModel("text-embedding-004");

// Pinecone setup
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

const genid = () => Math.random().toString(36).slice(2, 15);

 

export async function POST(req: NextRequest) {
  try {
    const user = getAuth(req);
    const userid = user.userId;
    const org = await db.user.findFirst({
      where: {
        userId: userid || "",
      },
      include: {
        organization: true,
      },
    });

    const body = await req.json();
    const { messages }: { messages: Array<Message> } = body;



    const knowledge = org?.organization?.knowledgeBase
      ? `Organization Knowledge: ${org.organization.knowledgeBase}`
      : `User hasn't filled any data. Respond with: "First fill your data sir! PLEASE 🫡"`;

  
   

    const mainPrompt = await MainPrompt2(req);
  const exclPromt = await execl 

    const prompt = (messages: Message[]): Message[] => [
      {
        id: genid(),
        role: "system",
        content: mainPrompt,
      },
      {
        id: genid(),
        role: "system",
        content:exclPromt
      },
      {
        id: genid(),
        role: "system",
        content:
          knowledge ||
          `Whatever user says, just say, "First fill your knowledge form🫡"`,
      },
      // {
      //   id: genid(),
      //   role: "system",
      //   content: `Relevant Policies:\n${relevantContexts}`,
      // },
      ...messages.map((message) => ({
        id: message.id || genid(),
        role: message.role,
        content: message.content,
      })),
    ];

    // console.log(relevantContexts)

    const result = await streamText({
      model,
      messages: prompt(messages),
      tools: {
        sendEmail: tool({
          description:
            "Send the mail to required user whenever user asks about sending mail/inform someone/resend the mail or anything about mail or informing someone through email.",
          parameters: z.object({
            to: z
              .string()
              .describe("The email address where mail is to be sent."),
            subject: z.string().describe("The subject required for email."),
            text: z
              .string()
              .describe("The content that needs to be sent in email."),
          }),
          execute: async ({ to, subject, text }) => {
            await MailSend({ to, subject, text });
            return {
              to,
              subject,
              text,
            };
          },
        }),
        // calendarEventScheduler: tool({
        //   description: "Send an event or a reminder for user",
        //   parameters: z.object({
        //     summary: z
        //       .string()
        //       .describe("The summary of event or reminder to be set"),
        //     location: z
        //       .string()
        //       .describe("The the location of event or reminder"),
        //     description: z
        //       .string()
        //       .describe("The description of the event or reminder to be set"),
        //     start: z
        //       .string()
        //       .describe(
        //         "The start date and time of event that needs to be in ISO 8601 format"
        //       ),
        //     end: z
        //       .string()
        //       .describe(
        //         "The end date and time of event that needs to be in ISO 8601 format"
        //       ),
        //   }),
        //   execute: async ({ summary, location, description, start, end }) => {
        //     await CreateCalendarEvent({
        //       summary,
        //       location,
        //       description,
        //       start,
        //       end,
        //     });
        //     return {
        //       summary,
        //       location,
        //       description,
        //       start,
        //       end,
        //     };
        //   },
        // }),
        // calendarFetchEvent: tool({
        //   description: "Fetch the events scheduled for user",
        //   parameters: z.object({
        //     minDate: z
        //       .string()
        //       .describe(
        //         "The starting date and time from which events are to be fetched, must be a javascript suitable date function, eg: 2025-02-20T10:00:00+05:30"
        //       ),
        //     maxDate: z
        //       .string()
        //       .describe(
        //         "The ending date and time till which events are to be fetched, must be a javascript suitable date function, eg: 2025-02-20T10:00:00+05:30"
        //       ),
        //   }),
        //   execute: async ({ minDate, maxDate }) => {
          
        //     const timeMin = new Date(minDate);
        //     const timeMax = new Date(maxDate);
        //     const c = await GetCalendarEvents({ timeMin, timeMax });
        //     return {
        //       c,
        //     };
        //   },
        // }),
        // fetchProjects: tool({
        //   description: "Fetches all Jira projects accessible to the user.",
        //   parameters: z.object({}),
        //   execute: async () => {
        //     const project = await fetchJiraProjects();
        //     return project;
        //   },
        // }),
        // createJiraIssue: tool({
        //   description: "Creates an issue in Jira after asking the user for details.",
        //   parameters: z.object({
        //     projectKey: z.string().describe("The Jira project key."),
        //     summary: z.string().describe("A short summary of the issue."),
        //     description: z.string().describe("A detailed description of the issue."),
        //     issueType: z.string().describe("Type of the issue, e.g., Bug, Task, Story."),
        //     issueId: z.string().describe(`The ID of the issue. Never ask it from user, it has to be derived from issueType. If it is Task, it is "10001", Epic: "10002", Subtask: "10004", Bug it is "10005".`),
        //   }),
        //   execute: async ({ projectKey, summary, description, issueType, issueId }) => {
        //     const issue = await createJiraIssue({projectKey, summary, description, issueType, issueId});
        //     console.log("Issue Created", issue)
        //     return `Issue has been created successfully. Anything else Comrade?`;
        //   },
        // })
      },
      maxSteps: 5,
      temperature: 0.7,
      maxTokens: 400,
      toolCallStreaming: true,
      onFinish({ usage }) {
        console.log("Token usage:", usage);
      },
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error during chat completion:", error);
    return new Response("Error occurred while generating a response.", {
      status: 500,
    });
  }
}
