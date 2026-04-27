/**
 * Vercel Serverless Function for TanStack Start SSR
 * Handles all requests and routes them to the server
 */

export default async (req, res) => {
  try {
    // Dynamically import the server build
    const serverModule = await import('../dist/server/server.js');
    const handler = serverModule.default;

    if (!handler || typeof handler !== 'function') {
      console.error('Server handler is not a function:', typeof handler);
      return res.status(500).json({ 
        error: 'Server handler not available',
        received: typeof handler 
      });
    }

    // Convert Node request/response to Web standard Request
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const pathname = req.url || '/';
    
    const webRequest = new Request(`${protocol}://${host}${pathname}`, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD', 'DELETE'].includes(req.method) ? null : req.body,
    });

    // Call the server handler
    const webResponse = await handler(webRequest);

    // Set response status
    res.status(webResponse.status);

    // Copy headers from web response
    webResponse.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    // Send body
    if (webResponse.body) {
      const arrayBuffer = await webResponse.arrayBuffer();
      res.end(Buffer.from(arrayBuffer));
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Serverless function error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : '') : undefined,
    });
  }
};

export const config = {
  runtime: 'nodejs18.x',
  maxDuration: 60,
};
