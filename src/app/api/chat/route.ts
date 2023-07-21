import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

const openai = new OpenAIApi(config)
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

const prompts = [
    'What is the meaning of life?',
    'Tell me a joke.',
    'What is the capital of France?',
    'What is the square root of 144?'
  ]

interface PromptMessage extends ChatCompletionRequestMessage {
    text: string
  }
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json()
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  
  console.log(stream)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}