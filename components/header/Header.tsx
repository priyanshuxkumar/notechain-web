import Link from "next/link";

export default function Header() {
  return (
    <header className="px-12 sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden text-2xl font-bold sm:inline-block">Dare</span>
          </Link>
        </div>
        <div>
        <button>Sign in</button>
        </div>
      </div>
    </header>
  );
}
