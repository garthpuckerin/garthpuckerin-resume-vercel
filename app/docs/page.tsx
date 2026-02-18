'use client';

import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });
import 'swagger-ui-react/swagger-ui.css';

/**
 * Swagger UI documentation page
 * Serves OpenAPI spec from /api/openapi
 */
export default function ApiDocsPage() {
  return (
    <div style={{ height: '100vh' }}>
      <SwaggerUI url="/api/openapi" />
    </div>
  );
}
