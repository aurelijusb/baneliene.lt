"use client";

import { query } from "@/components/Home";
import { usePreview } from "@/lib/sanity.preview";
import { ReactNode, useLayoutEffect } from "react";

// Reads draft version and stores it into callback
// Using token instead of Next.js res.setPreviewData for Statically generated pages
export function SanityPreview(props: {
  query: string;
  token: string | null;
  setData: (d: any) => void;
  children: ReactNode;
}) {
  const { setData, token, children } = props;
  const data = usePreview(token, query);
  useLayoutEffect(() => {
    if (token !== null && data !== null) {
      setData(data);
    }
  });
  return <>{children}</>;
}
