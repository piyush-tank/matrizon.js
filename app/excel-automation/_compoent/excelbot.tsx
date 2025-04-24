"use client";
import React, { useState, useRef, useEffect, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import {
  Handshake,
  HeartPulse,
  Loader,
  NotepadText,
  Send,
  Sparkles,
  Users,
  ArrowLeft,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Poppins } from "next/font/google";
import extractJsonFromString from "./get-json";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Chat({ excelData, setExcelData }: { excelData: string; setExcelData: React.Dispatch<SetStateAction<string>> }) {
  // Initialize router for back navigation


  // 1. Set up chat + local state
  const { messages, input, handleInputChange, handleSubmit, status, stop } = useChat();
  const [messageTimestamps] = useState(new Map<string, string>());

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 3. Submit chat message + Excel data
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let updatedInput = input;
    // You could append Excel data to the message here if needed
    handleInputChange({ target: { value: updatedInput } } as React.ChangeEvent<HTMLInputElement>);
    try {
      handleSubmit();
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  // 4. Focus + Autoscroll
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 5. Timestamp helper
  const getMessageTime = (messageId: string) => {
    if (!messageTimestamps.has(messageId)) {
      messageTimestamps.set(messageId, new Date().toLocaleTimeString());
    }
    return messageTimestamps.get(messageId);
  };

  // 6. Example suggestions (if needed)
  const suggestions = [
    {
      icon: <Handshake className="w-4 h-4 mr-2" />,
      text: "Hey Acenra, what's up?",
    },
    {
      icon: <Sparkles className="w-4 h-4 mr-2" />,
      text: "What does Findun Innovations and Technologies do?",
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

  const handleSuggestionClick = (text: string) => {
    handleInputChange({
      target: { value: text },
    } as React.ChangeEvent<HTMLInputElement>);
    if (inputRef.current) inputRef.current.focus();
  };

  // 7. Process messages to extract Excel data when available
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const tempJson = excelData;
      if (lastMessage.role === "assistant") {
        // Extract JSON if present
        const extractedJson = extractJsonFromString(lastMessage.content, "filebase64");
        if (extractedJson) {
          setExcelData(extractedJson); // Store extracted data in state
        } else {
          setExcelData(tempJson);
        }
      }
    }
  }, [messages]);

  return (
    <main className={`${poppins.className} shrink-0 h-screen w-[600px] bg-white`}>
      {/* Navbar with Back Button */}
     

      <div className="flex h-full bg-black">
        <div className="flex rounded-lg flex-col items-center shadow-lg justify-center p-6 relative w-full">
          {/* Welcome Screen */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center flex-1">
              <h1 className="text-2xl font-bold text-green-500 text-center">
                Welcome to Execel Automation
              </h1>
            </div>
          )}

          {/* Chat Messages */}
          {messages.length > 0 && (
            <div className="w-full h-[88%] p-4 absolute top-0 justify-start flex flex-col">
              <div className="overflow-y-auto flex-grow">
                {messages.map((message) => (
                  <div key={message.id} className="mb-4">
                    {message.role === "assistant" ? (
                      <div className="w-full text-[14px] mx-auto px-10 flex">
                        <div className="ml-1">
                          <div className="bg-green-500 text-black p-3 rounded-lg relative">
                         
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                code({ node, className, children, ...props }) {
                                  return (
                                    <pre
                                      {...props}
                                      className="bg-gray-200 p-2 rounded text-black"
                                      ref={props.ref as React.LegacyRef<HTMLPreElement>}
                                    >
                                      <code>{children}</code>
                                    </pre>
                                  );
                                },
                                ul: ({ children }) => <ul className="list-disc ml-4">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal ml-4">{children}</ol>,
                                a: ({ node, ...props }) => (
                                  <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    {props.children}
                                  </a>
                                ),
                              }}
                            >
                              {extractJsonFromString(message.content )}
                            </ReactMarkdown>
                          </div>
                          <span className="text-xs text-white">{getMessageTime(message.id)}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full mx-auto text-[14px] py-6 justify-end px-10 flex">
                        <div>
                          <div className="bg-green-500 p-2 text-black rounded-lg relative">
                           
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                code({ node, className, children, ...props }) {
                                  return (
                                    <pre
                                      {...props}
                                      className="bg-gray-200 p-2 rounded text-white"
                                      ref={props.ref as React.LegacyRef<HTMLPreElement>}
                                    >
                                      <code>{children}</code>
                                    </pre>
                                  );
                                },
                                ul: ({ children }) => <ul className="list-disc ml-4">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal ml-4">{children}</ol>,
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                          <span className="text-xs text-white">{getMessageTime(message.id)}</span>
                        </div>
                     
                      </div>
                    )}
                  </div>
                ))}
                <div ref={scrollRef}></div>
              </div>
            </div>
          )}

          {/* Streaming Status */}
          <div className="w-full flex flex-col justify-center items-center absolute bottom-24">
            {(status === "submitted" || status === "streaming") && (
              <div className="flex justify-center gap-2 items-center mb-1">
                {status === "submitted" && <span className="text-black">Submitted</span>}
                <Button onClick={stop}>
                  Stop
                  <Loader className="animate-spin ml-2" />
                </Button>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="w-full flex-col justify-center shadow-md rounded-lg flex items-center absolute bottom-0">
            <div className="w-full mb-2 flex flex-col justify-center rounded-lg flex items-center">
              <form
                className="w-5/6 flex rounded-lg items-center border border-gray-300 bg-white"
                onSubmit={submit}
              >
                <input
                  ref={inputRef}
                  className="h-12 rounded-md bg-white px-4 text-sm flex-grow text-black focus:outline-none border-none"
                  placeholder="Send a message"
                  value={input}
                  onChange={handleInputChange}
                />
                <button type="submit" className="bg-green-500 p-2 text-white mr-1 rounded-lg hover:bg-blue-600">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
