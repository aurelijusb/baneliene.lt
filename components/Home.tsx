import Head from "next/head";
import Image from "next/image";
import { Presentation } from "../data/load";
import { groq } from "next-sanity";
export default Home;

export function Home({ presentations }: { presentations: Presentation[] }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>My Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white px-4 py-2">
          <h1 className="text-lg font-bold">My Website</h1>
        </header>
        <main className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4">Presentations!</h2>
          {presentations.map((p: Presentation) => (
            <div key={p.Title}>
              <h3>{p.Title}</h3>
              <Image
                src={p.Image}
                alt={p.Title}
                width={640}
                height={640}
              ></Image>
            </div>
          ))}
        </main>
        <footer className="bg-gray-800 text-white px-4 py-2">
          <p className="text-center">Copyright © {currentYear}</p>
        </footer>
      </main>
    </>
  );
}

export const query = groq`*[_type == "presentation"] {
    Title,
    "Image": Image.asset->url
  }`;
