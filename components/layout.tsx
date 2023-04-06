import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return <div className="mx-auto max-w-md">{children}</div>;
}