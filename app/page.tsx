import {
  IconBrandGithub,
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
            <h2>Alex Kubica 🇮🇱🎩🩸</h2>
            <div className="prose text-center pt-4">Full stack dev.</div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center pb-4">
            <IconButton
              icon={<IconBrandTelegram />}
              url="https://t.me/alexkubica"
            />
            <IconButton icon={<IconMail />} url="mailto:me@alexkubica.com" />
            <IconButton icon={<IconBrandX />} url="https://x.com/alexkubica_" />
            <IconButton
              icon={<IconBrandLinkedin />}
              url="https://www.linkedin.com/in/alexkubica/"
            />
            <IconButton
              icon={<IconBrandThreads />}
              url="https://www.threads.net/@alex_kubica"
            />
            <IconButton
              icon={<IconBrandGithub />}
              url="https://github.com/alexkubica"
            />
          </div>

          <LinkButton url="https://warpcast.com/alexk">
            Farcaster - FID 14879
          </LinkButton>

          <div className="prose text-center ">
            I host{" "}
            <a className="link" href="https://warpcast.com/~/channel/host">
              /host
            </a>{" "}
            <a
              className="link"
              href="https://warpcast.com/~/channel/eurovision"
            >
              /eurovision
            </a>{" "}
            <a className="link" href="https://warpcast.com/~/channel/hebrew">
              /hebrew
            </a>{" "}
            <a
              className="link"
              href="https://warpcast.com/~/channel/graffitihunters"
            >
              /graffitihunters
            </a>
            .
          </div>

          <LinkButton url="https://t.me/yshliweb3">
            Follow &quot;Web3 News&quot; on Telegram
          </LinkButton>

          <LinkButton url="https://drakula.app/user/alexk?invite=pdkkjd">
            Watch my videos on Drakula 🩸
          </LinkButton>

          <LinkButton url="https://zora.co/@alexk">
            Mint my NFTs on Zora 🎨
          </LinkButton>

          <LinkButton url="https://www.frameboard.com/alexk-c236">
            Frameboard
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>Projects</h4>
          </div>

          <LinkButton url="https://ysh.li">
            ysh.li - collection of random projects
          </LinkButton>

          <LinkButton url="https://ysh.li/fid">
            &quot;What&apos;s my fid?&quot; frame
          </LinkButton>

          <LinkButton url="https://t.me/yshliweb3">
            Web3 News channel bot on Telegram
          </LinkButton>

          <LinkButton url="https://www.spatial.io/s/Art-Gallery-by-Diana-Later-63e951b0de17b1be4948ef18">
            DL`Art's Metaverse art gallery
          </LinkButton>

          <LinkButton url="https://rnd3.spread.name/">
            R&D3 - Web3 News magazine POC
          </LinkButton>

          <div className="prose text-center pt-4">
            <h4>Misc.</h4>
          </div>

          <LinkButton url="https://ysh.li/alex">קישורים בעברית</LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
