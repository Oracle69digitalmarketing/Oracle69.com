import { createOpenAI } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';
import {NextResponse} from "next/server";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { demoType, userInput } = await req.json();

    if (!demoType || !userInput) {
      return new NextResponse('Missing demoType or userInput', { status: 400 });
    }

    let prompt;
    // Note: The prompts are asking the model to generate *sample* data that looks realistic.
    // This is because the model cannot actually access external websites for an SEO audit,
    // and generating full funnel/lead magnet strategies is complex. This provides a "real"
    // feel without needing complex, multi-step AI chains. The structure of the JSON
    // is designed to match what the frontend component already expects.
    switch (demoType) {
      case 'seo':
        prompt = `You are an expert SEO auditor. For the website URL "${userInput}", generate a concise, sample SEO audit. The response must be a JSON object with this exact structure: { "score": number, "issues": number, "improvements": number, "traffic": string }. "score" should be between 70-95. "issues" should be between 2-5. "improvements" should be between 5-10. "traffic" should be a string like "+25%". Generate realistic but fictional data.`;
        break;
      case 'funnel':
        prompt = `You are an expert marketing funnel builder. For the business "${userInput}", generate a sample marketing funnel analysis. The response must be a JSON object with this exact structure: { "score": number, "issues": number, "improvements": number, "traffic": string }. "score" should be between 70-95. "issues" should be between 2-5. "improvements" should be between 5-10. "traffic" should be a string like "+35%". Generate realistic but fictional data.`;
        break;
      case 'leads':
        prompt = `You are an expert lead generation specialist. For the target audience "${userInput}", generate a sample lead magnet analysis. The response must be a JSON object with this exact structure: { "score": number, "issues": number, "improvements": number, "traffic": string }. "score" should be between 70-95. "issues" should be between 2-5. "improvements" should be between 5-10. "traffic" should be a string like "+45%". Generate realistic but fictional data.`;
        break;
      default:
        return new NextResponse('Invalid demoType', { status: 400 });
    }

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: z.object({
        score: z.number(),
        issues: z.number(),
        improvements: z.number(),
        traffic: z.string(),
      }),
      prompt,
    });

    return NextResponse.json(object);

  } catch (error) {
    console.error('[INTERACTIVE_DEMO_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
