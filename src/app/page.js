import Image from "next/image";
import Page from "../app/ecom/page"
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
  
      <main >
        <h1 className="">
          <Navbar/>
          <Page></Page>
        </h1>
      </main>
      
  );
}
