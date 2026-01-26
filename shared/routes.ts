import { z } from 'zod';
import { insertPhotoSchema, photos } from './schema';

export const api = {
  photos: {
    list: {
      method: 'GET' as const,
      path: '/api/photos',
      responses: {
        200: z.array(z.custom<typeof photos.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/photos/:id',
      responses: {
        200: z.custom<typeof photos.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.object({
          category: z.string(),
          skills: z.array(z.object({
            name: z.string(),
            description: z.string().optional(),
          })),
        })),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
