import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsConfig: CorsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST'],
  exposedHeaders: ['Content-Type'],
  allowedHeaders: ['Content-Type'],
  maxAge: process.env.CORS_MAX_AGE ? parseInt(process.env.CORS_MAX_AGE) : 120,
};

export const appPort = process.env.PORT || 8000;