import { NextResponse } from "next/server";

import { HfInference } from "@huggingface/inference";

export async function POST(req) {
  try {
    // Parse the request body
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

    //hugging face test
    const client = new HfInference(process.env.HUGGINGFACEHUB_API_TOKEN);

    const chatCompletion = await client.chatCompletion({
      model: "Qwen/QwQ-32B-Preview",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
    });

    console.log(chatCompletion.choices[0].message);

    // Return the response as JSON
    return NextResponse.json({ data: chatCompletion.choices[0].message });
  } catch (err) {
    console.error("Error :", err);

    return NextResponse.json(
      { error: "Failed to fetch the response from Ollama." },
      { status: 500 }
    );
  }
}
