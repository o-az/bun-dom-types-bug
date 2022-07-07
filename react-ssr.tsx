import * as React from 'react';
import { renderToReadableStream } from "react-dom/server"

/**
 * Comment out `"bun-types"` in `tsconfig.json` and dom types are happy again.
 */
const copyToClipboard = async (text: string) =>
  await navigator.clipboard.writeText(text)

export default {
  port: 3000,
  async fetch(request: Request) {
    return new Response(
      (await renderToReadableStream(
        <html>
          <p>bun</p>
        </html>
      )) as any
    )
  },
}
