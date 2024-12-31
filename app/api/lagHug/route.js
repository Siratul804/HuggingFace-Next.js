import { NextResponse } from "next/server";

import { HuggingFaceInference } from "@langchain/community/llms/hf";

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

    const model = new HuggingFaceInference({
      model: "Qwen/QwQ-32B-Preview",
      apiKey: process.env.HUGGINGFACEHUB_API_TOKEN,
    });

    const res = await model.invoke("1 + 1 =");
    console.log({ res });

    return NextResponse.json({
      data: res,
    });
  } catch (err) {
    console.error("Error :", err);

    return NextResponse.json(
      { error: "Failed to fetch the response from Ollama." },
      { status: 500 }
    );
  }
}
