import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { Metadata } from "next";
import Footer from "./components/Footer";
import IconButton from "./components/IconButton";
import LinkButton from "./components/LinkButton";

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_URL;
}

const SITE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: "Alex Kubica",
  openGraph: {
    images: [`${SITE_URL}/images/alex-avatar.png`],
  },
  other: {
    "fc:frame:image:aspect_ratio": "1:1",
    "fc:frame": "vNext",
    "fc:frame:image": `${SITE_URL}/images/alex-avatar.png`,
    "og:image": `${SITE_URL}/images/alex-avatar.png`,
    "fc:frame:post_url": `${SITE_URL}/fc/0`,
    "fc:frame:button:1": "🔗 My Links",
  },
};

export default function HomePage() {
  return (
    <div
      dir="ltr"
      data-theme="alex"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="flex flex-col justify-between text-white text-center max-w-screen-md mx-auto container">
        <div className="flex flex-col items-center p-4 space-y-8">
          <div className="avatar">
            <div className="mt-8 w-32 rounded-2xl">
              <img src="/images/alex-avatar.png" alt={"avatar"} />
            </div>
          </div>
          <div className="prose text-center">
            <h2>Alex Kubica 🇮🇱🎩</h2>
            <div className="flex flex-wrap gap-4 justify-center pb-4">
              <IconButton
                icon={<IconBrandTelegram />}
                url="https://t.me/alexkubica"
              />
              <IconButton icon={<IconMail />} url="mailto:me@alexkubica.com" />
              <IconButton
                icon={<IconBrandX />}
                url="https://x.com/alexkubica_"
              />
              <IconButton
                icon={<IconBrandLinkedin />}
                url="https://www.linkedin.com/in/alexkubica/"
              />
              <IconButton
                icon={<IconBrandThreads />}
                url="https://www.threads.net/@alex_kubica"
              />
            </div>
            <div className="prose text-center">
              PERN stack dev. Getting lean.
              <br />
              Dad of 2 chihuahuas Lilo & Stich.
              <br />
              Learning Russian & Japanese.
              <br />
              0xd81B7A2a1bBf3e1c713f2A5C886f88EE5f862417
            </div>
            <div className="prose text-center pt-8">
              <LinkButton url="https://warpcast.com/alexk">
                Farcaster - FID 14879
              </LinkButton>
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="https://drakula.app/user/alexk?invite=pdkkjd">
                Watch my vlogs on Drakula 🩸
              </LinkButton>
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="https://zora.co/@alexk">
                Mint my NFTs on Zora 🎨
              </LinkButton>
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="https://ysh.li/fid">
                "What's my fid?" frame
              </LinkButton>
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="https://t.me/yshliweb3">
                Follow "Web3 News" on Telegram
              </LinkButton>
            </div>
            <div className="prose text-center pt-4">
              <LinkButton url="https://ysh.li/alex">קישורים בעברית</LinkButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
