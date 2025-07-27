import OpenAI from 'openai';

interface Options {
  threadId: string;
  question: string;
}

export const createMessageUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { threadId, question } = options;

  const message = openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: question,
  });

  return message;
};
