import { NextResponse } from 'next/server';

/**
 * Health check endpoint for monitoring and load balancers
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  );
}
