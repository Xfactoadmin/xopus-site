import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

type AppIntent = "login" | "register" | "dashboard";

const APP_BASE = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.xopus.fr";

function appLinkFor(intent: AppIntent): string {
  switch (intent) {
    case "login":
      return `${APP_BASE}/login`;
    case "register":
      return `${APP_BASE}/register`;
    case "dashboard":
      return `${APP_BASE}`;
  }
}

type Props = {
  intent?: AppIntent;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

export default function AppLink({
  intent = "register",
  className,
  children,
  style,
}: Props) {
  return (
    <Link href={appLinkFor(intent)} className={className} style={style}>
      {children}
    </Link>
  );
}