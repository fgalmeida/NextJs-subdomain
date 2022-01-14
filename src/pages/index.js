import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [subdomain, setSubdomain] = useState();
  const [hostName, setHostname] = useState();

  useEffect(() => {
    const hostName = window.location.hostname;

    let previousName = "";
    for (let i = 0; i < hostName.length; i++) {
      if (hostName[i] === ".") {
        break;
      }
      previousName += hostName[i];
    }
    setSubdomain(previousName);
    setHostname(hostName);
  }, []);

  return (
    <div>
      <Head>
        <title>{subdomain} | Example</title>
      </Head>

      <main>
        <h1>{subdomain}</h1>
        <h4>{hostName}</h4>
      </main>
    </div>
  );
}
