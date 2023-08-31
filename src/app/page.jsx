import DarkToggle from "./components/dark-toggle";
import MenuToggle from "./components/menu-toggle";
import SquareSpiral from "./components/square-spiral";

export default function Home() {
  return (
    <main className="grid-bg flex justify-center items-center w-screen h-screen text-2xl leading-10 z-0">
      <h1 className="bg-repeat fixed top-8 left-8 flex items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11.5146"
            y="5.30304"
            width="24"
            height="24"
            transform="rotate(15 11.5146 5.30304)"
            fill="#C4C4C4"
          />
        </svg>
        4th Kind Ventures
      </h1>

      {/* insert darkmode button here */}
      <div className="fixed bottom-8 left-8 z-20">
        <DarkToggle />
      </div>

      <div className="fixed top-8 right-8 z-10">
        <MenuToggle />
      </div>

      <div>
        <SquareSpiral/>
      </div>
    </main>
  );
}
