import OpenAI from 'openai';

interface Options {
  prompt: string;
  lang: string;
}

export const translateStreamUseCase = async (
  openai: OpenAI,
  { prompt, lang }: Options,
) => {
  return await openai.chat.completions.create({
    stream: true,
    messages: [
      {
        role: 'system',
        content: `Traduce el siguiente texto al idioma ${lang}:${prompt}`,
      },
    ],
    model: 'gpt-4o',
    temperature: 0.2,
    // max_tokens: 500,
  });
};
