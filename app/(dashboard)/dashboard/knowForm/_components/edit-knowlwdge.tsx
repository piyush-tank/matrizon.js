"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
 
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface EditKnowledgeProps {
  knowledge: string | null |undefined;
}

export default function EditKnowledge({ knowledge }: EditKnowledgeProps) {
  // Store the text content
  const [data, setData] = useState(knowledge);
  const [loading, setLoading] = useState(false);

  // Track current word count
  const [charCount, setCharCount] = useState(knowledge?.length); // Track character count
  const MAX_CHARS = 3000;

  // Update state when the user types in the textarea
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const chars = text.length;

     // Only update if under the character limit
     if (chars <= MAX_CHARS) {
      setData(text);
      setCharCount(chars);
    }
  };

  // Handle submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // POST request to update organization with the knowledgeBase field
      const response = await fetch("/api/knowForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ knowledgeBase: data }),
      });

      if (response.ok) {
        toast.success("Knowledge Base updated successfully.");
      } else {
        toast.error("Failed to update Knowledge Base.");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    console.log("Updated Content:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[90vh] p-4 bg-background">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-4xl h-full"
      >
        <h1 className="text-2xl font-bold mb-4">Edit your Knowledge Base</h1>

        {/* Textarea with 500-word limit */}
        <Textarea
          spellCheck={false} // Disable spell check (no red lines)
          autoCorrect="off" // Disable auto-correction
          autoCapitalize="none"
          value={data??""}
          onChange={handleChange}
          className="flex-1 resize-none"
          placeholder="Type your content here..."
          maxLength={MAX_CHARS} 
        />

        {/* Word count indicator */}
        <div className="mt-2 text-sm text-muted-foreground text-right">
          {charCount} / {MAX_CHARS} characters
        </div>

        {/* Submit button */}
        {loading ? (
          <Button disabled type="submit" className="mt-4 w-fit self-end">
             Submitting <Loader2 className="animate-spin ml-2" size={20}/>
          </Button>
        ) : (
          <Button type="submit" className="mt-4 w-fit self-end">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
}

/** Utility function to count words in a string */
function countWords(text: string): number {
  // Split on whitespace, filter out empty strings
  return text.trim().split(/\s+/).filter(Boolean).length;
}
