import Main from "./Main";
import CoMain from "./CoMain";



export default function Home() {
  return (
    <>
      <div className={"max-w-screen-lg max-md:mx-auto flex items-start gap-3 my-1 mx-auto"}>
        <div className="w-[98%] lg:w-3/4 mx-auto">
          <Main />
        </div>
        <div className="sticky top-2 my-2 w-1/4 max-lg:hidden">
          <CoMain />
        </div>
      </div>
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


