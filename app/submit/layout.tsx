import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Music — Vagus Records",
  description: "Send a private demo link to Vagus Records.",
};

export default function SubmitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
