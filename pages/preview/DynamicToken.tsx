import { query } from "@/components/Home";
import { usePreview } from "@/lib/sanity.preview";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

export default DynamicToken;

// Prompting access token and storing it in local storage.
// So Draft previews could be used with statically generated sites
export function DynamicToken(props: {
  children: ReactNode;
  setToken: (t: string | null) => void;
  placeholder: String | ReactNode;
}) {
  const { children, setToken, placeholder } = props;
  const [dynamic, setDynamic] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("SANITY_API_READ_TOKEN");
    if (token === null) {
      token = prompt("Enter SANITY_API_READ_TOKEN for draft");
      if (token !== null) {
        localStorage.setItem("SANITY_API_READ_TOKEN", token);
      }
    }
    setDynamic(true);
    setToken(token);
  }, [setToken]);

  return <>{dynamic ? children : <div>{placeholder}</div>}</>;
}

// // Not putting
// export function SanityPreview(props: {
//   query: string;
//   token: string | null;
//   setData: (d: any) => void;
//   children: ReactNode;
// }) {
//   const { setData, token, children } = props;
//   const data = usePreview(token, query);
//   useLayoutEffect(() => {
//     if (token !== null && data !== null) {
//       setData(data);
//     }
//   });
//   return <>{children}</>;
// }
