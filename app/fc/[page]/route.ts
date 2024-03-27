import { NextResponse } from "next/server";

type Params = {
  page: number;
};

const pages = [
  `
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL}/alex/fc/1" />
        <meta property="fc:frame:button:1" content="X" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://x.com/alexkubica_" />

        <meta property="fc:frame:button:2" content="Telegram" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta property="fc:frame:button:2:target" content="https://t.me/alexkubica" />

        <meta property="fc:frame:button:3" content="Linkedin" />
        <meta property="fc:frame:button:3:action" content="link" />
        <meta property="fc:frame:button:3:target" content="https://www.linkedin.com/in/alexkubica/" />

        <meta property="fc:frame:button:4" content="➡️️" />
  `,
  `
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_URL}/alex/fc/0" />


        <meta property="fc:frame:button:1" content="Mail" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_URL}/alex/mail" />

        <meta property="fc:frame:button:2" content="Threads" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta property="fc:frame:button:2:target" content="https://www.threads.net/@alex_kubica" />

        <meta property="fc:frame:button:3" content="Get Yours!" />
        <meta property="fc:frame:button:3:action" content="link" />
        <meta property="fc:frame:button:3:target" content="https://forms.gle/hXR2MY8e33NmzTKK6" />

        <meta property="fc:frame:button:4" content="⬅️" />
  `,
];

export async function POST(request: Request, context: { params: Params }) {
  const pageMetadata = pages[context.params.page];

  return new NextResponse(`
    <!DOCTYPE html>
        <html>
            <head>
                <title>Alex Kubica Frame Page #${context.params.page}</title>
                <meta property="og:image" content="${process.env.NEXT_PUBLIC_URL}/images/alex-avatar.png" />
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_URL}/images/alex-avatar.png" />

                ${pageMetadata}
            </head>
        </html>
    `);
}
