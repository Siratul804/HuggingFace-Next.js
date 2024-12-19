import { NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    // Validate input
    if (!message) {
      return NextResponse.json(
        { error: "Query is required in the request body." },
        { status: 400 }
      );
    }

    console.log("Received query:", message);

    const client = new HfInference(process.env.HUGGINGFACEHUB_API_TOKEN);

    const chatCompletion = await client.chatCompletion({
      model: "meta-llama/Llama-3.2-11B-Vision-Instruct",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Describe this image in one sentence.",
            },
            {
              type: "image_url",
              image_url: {
                url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            },
          ],
        },
      ],
      max_tokens: 500,
    });

    console.log(chatCompletion.choices[0].message.content);

    return NextResponse.json({
      data: chatCompletion.choices[0].message.content,
    });
  } catch (err) {
    console.error("Error :", err);

    return NextResponse.json(
      { error: "Failed to fetch the response from Ollama." },
      { status: 500 }
    );
  }
}
