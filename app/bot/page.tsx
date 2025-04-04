"use client";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import {
  Handshake,
  HeartPulse,
  Loader,
  NotepadText,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useRef } from "react";
import {
  ConfirmComponent,
  PendingComponent,
  EventScheduledComponent,
  EventList,
} from "./components/Email_confirm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat();
  // const { open } = useSidebar();
  const [messageTimestamps] = useState(new Map<string, string>());
  const inputref = useRef<HTMLInputElement>(null);

  const suggestions = [
    {
      icon: <Handshake className="w-4 h-4 mr-2" />,
      text: "Hey aHRi, What's up?",
    },
   
    {
      icon: <Users className="w-4 h-4 mr-2" />,
      text: "Who are the key people in the company?",
    },
    {
      icon: <HeartPulse className="w-4 h-4 mr-2" />,
      text: "Whom should I contact for health concerns?",
    },
    {
      icon: <NotepadText className="w-4 h-4 mr-2" />,
      text: "Can you get my Joining Letter?",
    },
  ];

  const getMessageTime = (messageId: string) => {
    if (!messageTimestamps.has(messageId)) {
      messageTimestamps.set(messageId, new Date().toLocaleTimeString());
    }
    return messageTimestamps.get(messageId);
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSubmit(); // Ensure it's awaited properly
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const handleSuggestionClick = (text: string) => {
    handleInputChange({
      target: { value: text },
    } as React.ChangeEvent<HTMLInputElement>);

    if (inputref.current) inputref.current.focus();
  };

  useEffect(() => {
    if (inputref.current) {
      inputref.current.focus();
    }
  }, [inputref]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <main className={`${poppins.className} h-[calc(100%-60px)]`}>
      <div className="flex h-full bg-white ">
        <div className="flex  flex-col items-center  justify-center relative w-full">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center flex-1">
              {/* Logo */}
              {/* <div className="mb-4">
                <Image
                  alt="Acenra AI"
                  src="/AcenraLogo.jpg"
                  width={300}
                  height={300}
                />
              </div> */}

              {/* Heading & Subheading */}

              <h1 className="text-2xl font-bold text-gray-800 text-center">
                Welcome to aHRi !
              </h1>
              <p className="text-gray-600 text-[14px]  text-center mt-2 ">
                Explore aHRi AI&apos;s capabilities and how they benefit your hr
                team
              </p>

              {/* Pre-written Messages */}
              <div className="flex flex-wrap justify-center gap-2 mt-10 text-sm md:text-base">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="bg-[#7813dd] text-black text-[14px] transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-[#F4E8FF] shadow flex items-center"
                    onClick={() => handleSuggestionClick(suggestion.text)}
                  >
                    {suggestion.icon}
                    {suggestion.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {messages.length > 0 && (
            <div
              className={`w-full h-[88%] p-4 absolute top-0 justify-start flex flex-col`}
            >
              <div className="overflow-y-auto flex-grow">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.role === "assistant" && (
                      <div className="w-full text-[14px] mx-auto px-10 flex">
                        {/* <GPTLogo /> */}
                        {message.toolInvocations ? (
                          <div className="w-full h-full">
                            {message.toolInvocations?.map((tool) => {
                              const { toolName, toolCallId, state } = tool;
                              if (toolName === "sendEmail") {
                                if (state === "result") {
                                  return (
                                    <div
                                      className="ml-3 rounded-lg"
                                      key={toolCallId}
                                    >
                                      <ConfirmComponent message="Email Sent"/>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={toolCallId}>
                                      <PendingComponent message="Sending Mail"/>
                                    </div>
                                  );
                                }
                              }

                              // if (toolName === "fetchJiraProjects") {
                              //   if (state === "result") {
                              //     const project = tool.result
                              //     return (
                              //       <div key={toolCallId} className="ml-3 rounded-lg p-2 bg-gray-100">
                              //         <h3 className="font-semibold">Available Projects:</h3>
                              //         <ul className="list-disc ml-5">
                              //           {project?.projects?.map((project: { key: string; name: string }) => (
                              //             <li key={project.key}>
                              //               {project.name} ({project.key})
                              //             </li>
                              //           ))}
                              //         </ul>
                              //       </div>
                              //     );
                              //   } else {
                              //     return (
                              //       <div key={toolCallId} className="ml-3 p-2 text-blue-500">
                              //         Fetching projects...
                              //       </div>
                              //     );
                              //   }
                              // }
                            
                              if (toolName === "createJiraIssue") {
                                if (state === "result") {
                                  return (
                                    <div
                                      className="ml-3 rounded-lg"
                                      key={toolCallId}
                                    >
                                      <ConfirmComponent message="Issue Created"/>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={toolCallId}>
                                    <PendingComponent message="Creating Issue"/>
                                  </div>
                                  );
                                }
                              }

                              if (toolName === "calendarFetchEvent") {
                                if (state === "result") {
                                  const events = tool.result.c; // Accessing 'c' which is an array of events

                                  return (
                                    <div
                                      className="ml-3 rounded-lg p-5 bg-purple-100 shadow-md w-full"
                                      key={toolCallId}
                                    >
                                      {events.map((event: any) => (
                                        <div
                                          key={event.id}
                                          className="flex justify-between items-center border-b border-gray-300 p-4"
                                        >
                                          {/* Left Side: Event Title & Link */}
                                          <div>
                                            <h3 className="text-xl font-semibold text-gray-800">
                                              {event.summary}
                                            </h3>
                                            {event.htmlLink && (
                                              <a
                                                href={event.htmlLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-600 underline text-sm"
                                              >
                                                View Event
                                              </a>
                                            )}
                                          </div>

                                          {/* Right Side: Event Dates */}
                                          <div className="text-right text-gray-700">
                                            <p>
                                              <strong>Start:</strong>{" "}
                                              {new Date(
                                                event.start
                                              ).toLocaleString()}
                                            </p>
                                            <p>
                                              <strong>End:</strong>{" "}
                                              {new Date(
                                                event.end
                                              ).toLocaleString()}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={toolCallId}>
                                      <PendingComponent />
                                    </div>
                                  );
                                }
                              }

                              if (toolName === "calendarEventScheduler") {
                                if (state === "result") {
                                  return (
                                    <div
                                      className="ml-3 rounded-lg"
                                      key={toolCallId}
                                    >
                                      <EventScheduledComponent />
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={toolCallId}>
                                      <PendingComponent message="Scheduling Event"/>
                                    </div>
                                  );
                                }
                              }
                            })}
                          </div>
                        ) : (
                          <div className="ml-1">
                            <div className="bg-[#EFEEEE] text-gray-800 p-3 rounded-lg relative">
                              <div
                                className="absolute -start-[6px] top-0 w-3 h-10 bg-inherit"
                                style={{
                                  clipPath: "polygon(100% 0, 100% 50%, 0 0)",
                                }}
                              ></div>
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  code({
                                    node,
                                    className,
                                    children,
                                    ...props
                                  }) {
                                    return (
                                      <pre
                                        {...props}
                                        className="bg-gray-200 p-2 rounded1"
                                        ref={
                                          props.ref as React.LegacyRef<HTMLPreElement>
                                        }
                                      >
                                        <code>{children}</code>
                                      </pre>
                                    );
                                  },
                                  ul: ({ children }) => (
                                    <ul className="list-disc ml-4">
                                      {children}
                                    </ul>
                                  ),
                                  ol: ({ children }) => (
                                    <ol className="list-decimal ml-4">
                                      {children}
                                    </ol>
                                  ),
                                  a: ({ node, ...props }) => (
                                    <a
                                      {...props}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-500"
                                    >
                                      {props.children}
                                    </a>
                                  ),
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                              <div></div>
                            </div>
                            <span className="text-xs text-gray-400 mb-1">
                              {getMessageTime(message.id)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    {message.role === "user" && (
                      <div className="w-full mx-auto text-[14px] py-6 justify-end px-10 flex">
                        <div>
                          <div className="bg-[#F5F5F5] p-2 text-gray-800 rounded-lg relative">
                            <div
                              className="absolute -end-[6px] top-0 w-3 h-10 bg-inherit"
                              style={{
                                clipPath: "polygon(100% 0, 0 0, 0 41%)",
                              }}
                            ></div>
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                code({ node, className, children, ...props }) {
                                  return (
                                    <pre
                                      {...props}
                                      className="bg-gray-200 p-2 rounded1"
                                      ref={
                                        props.ref as React.LegacyRef<HTMLPreElement>
                                      }
                                    >
                                      <code>{children}</code>
                                    </pre>
                                  );
                                },
                                ul: ({ children }) => (
                                  <ul className="list-disc ml-4">{children}</ul>
                                ),
                                ol: ({ children }) => (
                                  <ol className="list-decimal ml-4">
                                    {children}
                                  </ol>
                                ),
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                          <span className="text-xs text-gray-400 mb-1">
                            {getMessageTime(message.id)}
                          </span>
                        </div>
                        <Image
                          alt="user"
                          src="/kutt.jpg"
                          width={100}
                          height={100}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={scrollRef}></div>
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="w-full flex-col justify-center shadow-md rounded-lg flex items-center absolute bottom-0">
            <div className="w-full flex flex-col justify-center items-center">
              {(status === "submitted" || status === "streaming") && (
                <div className="flex justify-center gap-2 items-center mb-1">
                  {status === "submitted"}
                  <Button onClick={stop}>
                    Stop
                    <Loader className="animate-spin ml-2" />
                  </Button>
                </div>
              )}
            </div>
            <div className="w-full mb-2 flex-col justify-center rounded-lg flex items-center">
              <form
                className="w-5/6 flex rounded-lg items-center border-[#180047] border-2 bg-[#FFFFFF]"
                onSubmit={submit}
              >
                <input
                  ref={inputref}
                  className="h-12 rounded-md bg-white px-4 text-sm flex-grow focus:outline-none border-none"
                  placeholder="Send a message"
                  value={input}
                  onChange={handleInputChange}
                />
                <Button
                  className="bg-[#53108d] text-white mr-1 rounded-lg hover:bg-[#53108dc0]"
                  size="icon"
                  onClick={submit}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </form>

             
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
