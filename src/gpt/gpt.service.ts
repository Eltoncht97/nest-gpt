import { Injectable } from '@nestjs/common';
import {
  orthographyCheckUseCase,
  prosConsDicusserStreamUseCase,
  prosConsDicusserUseCase,
  translateStreamUseCase,
  translateUseCase,
} from './use-cases';
import { OrthographyDto, ProsConsDiscusserDto, TranslateDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserStreamUseCase(this.openai, { prompt });
  }

  async translate({ prompt, lang }: TranslateDto) {
    return await translateUseCase(this.openai, { prompt, lang });
  }

  async translateStream({ prompt, lang }: TranslateDto) {
    return await translateStreamUseCase(this.openai, { prompt, lang });
  }
}
