"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function LagHug() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      setIsLoading(true);

      try {
        const response = await fetch("/api/lagHug", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputMessage }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch response");
        }

        const data = await response.json();

        // console.log(data.data.content);
        console.log(data.data);

        const botResponse = {
          id: messages.length + 2,
          text: data.data, // Assuming the API returns { response: "text" }
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        console.error("Error:", error);
        const botErrorResponse = {
          id: messages.length + 2,
          text: "Something went wrong. Please try again later.",
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botErrorResponse]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen bg-white">
        <div className="text-center py-4 ">
          <h1 className="text-lg pb-2 ">
            <span className="font-bold">QwQ-32B</span> LLM Model
          </h1>
          <p className="text-sm">
            QwQ-32B-Preview is an experimental research model developed by the{" "}
            <br />
            Qwen Team, focused on advancing AI reasoning capabilities.
          </p>
        </div>
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <ScrollArea className="h-[400px] pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  <div
                    className={`flex ${
                      message.sender === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    } items-start`}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        {message.sender === "user" ? "U" : "B"}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`mx-2 py-2 px-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter className="flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="flex-grow"
            />
            <Button onClick={handleSendMessage} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
