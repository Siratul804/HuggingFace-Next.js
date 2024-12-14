<h1 align="left" >
HugNex 
</h1>


<p align="left">
This repository provides a practical guide to integrating Next.js with Hugging Face to build AI-driven web applications. By leveraging the power of LLMs, you can create innovative features like text-to-image, text-to-voice, image-to-text, and text-to-text generation. I'd like you to please take a look at the step-by-step instructions for both server-side and client-side implementation within this repository.
</p>

<p align="center">
  <img src="https://hugging-face-next-js-woad.vercel.app/hugnex.png" alt="Home Screen" width="650"/>
</p>


</div>

## Technologies
- Next.js
- Huggingface.js
- Tailwind CSS 
- Shandcn/ui
  

## Installation

### Steps

1. Clone the repository
    ```bash
    git clone https://github.com/Siratul804/HuggingFace-Next.js.git
    ```
2. Navigate to the project directory
    ```bash
    cd your-repo
    ```
3. Install dependencies
    ```bash
    npm install
    ```
    or
   
      ```bash
    yarn install
    ```
5. Run the development server
    ```bash
    npm run dev
    ```
    or
   
     ```bash
    yarn run dev
    ```

## Core Components : 
### Hugging face
  ```bash
    import { HfInference } from "@huggingface/inference";

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
  ```

<p align="center">
<b>Made with ❤️ by   <a href="https://github.com/Siratul804">  Siratul Islam </a> </b> 
</p>

<p align="center">
  <a href="https://github.com/Siratul804?tab=repositories">View Project</a> •
  <a href="https://github.com/Siratul804">GitHub Profile</a> •
  <a href="https://www.linkedin.com/in/siratulislam/">LinkedIn</a> •
  <a href="https://x.com/Siratul074">Twitter</a>
</p>

<p align="center">
  <small>© 2024 Siratul Islam. All rights reserved.</small>
</p>
