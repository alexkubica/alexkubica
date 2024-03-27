import Link from "next/link";
import React from "react";

export default function LinkButton({
  icon,
  url,
  id,
}: {
  icon: JSX.Element;
  url: string;
  id?: string;
}) {
  return (
    <Link href={url} id={id} data-track="link">
      <button className="btn btn-circle btn-outline">{icon}</button>
    </Link>
  );
}
