import Main from "./Main";
import CoMain from "./CoMain";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin","latin-ext"],
});

export default function Home() {
  return (
    <>
    <div className={roboto.className}>
      <div className={"max-w-screen-lg max-md:mx-auto flex gap-3 my-1 mx-auto"}>
        <div className="w-[98%] lg:w-3/4 mx-auto">
          <Main />
        </div>
        <div className="my-2 w-1/4 max-lg:hidden">
          <CoMain />
        </div>
      </div></div>
    </>
  );
}


export function generateMetadata({ params }) {
  return {
    title: "Varun Gupta | Portfolio",
    description:
      "This Portfolio website is owned by Varun Gupta who is a Backend Developer",
  };
}


