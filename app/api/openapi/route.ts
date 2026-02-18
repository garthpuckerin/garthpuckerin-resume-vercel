import { NextResponse } from 'next/server';

/**
 * OpenAPI 3.0 specification for the resume/portfolio API
 * Extend this spec as you add API routes
 */
const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'Garth Puckerin Resume API',
    description: 'API for resume and portfolio data. Extend with additional endpoints as needed.',
    version: '1.0.0',
    contact: {
      name: 'Garth Puckerin',
      email: 'garth.puckerin@me.com',
      url: 'https://github.com/garthpuckerin',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'API base path',
    },
  ],
  paths: {
    '/health': {
      get: {
        summary: 'Health check',
        description: 'Returns API health status',
        operationId: 'getHealth',
        responses: {
          '200': {
            description: 'API is healthy',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'ok' },
                    timestamp: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export async function GET() {
  return NextResponse.json(openApiSpec, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
