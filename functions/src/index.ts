/* eslint-disable require-jsdoc */
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as functions from "firebase-functions";
import {Configuration, OpenAIApi} from "openai-edge";
import {OpenAIStream, StreamingTextResponse} from "ai";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: functions.config().openai.api_key,
});
const openai = new OpenAIApi(config);

import {Request, Response} from "express";

// eslint-disable-next-line max-len
export const chat = functions.https.onRequest(async (req: Request, res: Response) => {
  // Extract the `messages` from the body of the request
  const {messages} = req.body;

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  // eslint-disable-next-line new-cap
  const stream = OpenAIStream(response);
  // Respond with the stream
  res.send(new StreamingTextResponse(stream)).pipe(res);
});
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
