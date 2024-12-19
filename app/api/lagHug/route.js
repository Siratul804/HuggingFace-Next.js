import { NextResponse } from "next/server";
// import { HfInference } from "@huggingface/inference";

// import { HuggingFaceInference } from "langchain/llms/hf";

// import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

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

    // const client = new HfInference(process.env.HUGGINGFACEHUB_API_TOKEN);

    // const chatCompletion = await client.chatCompletion({
    //   model: "mistralai/Mistral-Nemo-Instruct-2407",
    //   messages: [
    //     {
    //       role: "user",
    //       content: message,
    //     },
    //   ],
    //   max_tokens: 500,
    // });

    // console.log(chatCompletion.choices[0].message.content);

    // const model = new HuggingFaceInference({
    //   model: "mistralai/Mistral-Nemo-Instruct-2407",
    //   apiKey: process.env.HUGGINGFACEHUB_API_TOKEN, // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
    // });

    // const res = await model.invoke("1 + 1 =");
    // console.log({ res });

    // const embeddings = new HuggingFaceInferenceEmbeddings({
    //   apiKey: process.env.HUGGINGFACEHUB_API_TOKEN, // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
    // });

    // Return the response as JSON
    return NextResponse.json({
      data: message,
    });
  } catch (err) {
    console.error("Error :", err);

    return NextResponse.json(
      { error: "Failed to fetch the response from Ollama." },
      { status: 500 }
    );
  }
}
