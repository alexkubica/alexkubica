import Link from "next/link";
import React from "react";

const convertChildrenToText = (children: any): string => {
  return React.Children.map(children, (child) => {
    // Check if the child is a text node
    if (typeof child === "string" || typeof child === "number") {
      return child.toString();
    }
    // For non-text elements, you might handle them differently
    // For example, if you want to ignore them, just return an empty string
    return "";
  }).join("");
};

export default function LinkButton({
  children,
  url,
  dir = "rtl",
}: {
  children: React.ReactNode;
  url: string;
  dir?: "rtl" | "ltr";
}) {
  const trackingId = convertChildrenToText(children).trim();

  return (
    <Link
      href={url}
      className="w-full"
      dir={dir}
      id={trackingId}
      data-track="link"
    >
      <button className="btn btn-primary w-full">{children}</button>
    </Link>
  );
}
