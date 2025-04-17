import Link from "next/link";

export default function Header() {
  return (
    <header className="px-12 sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between h-16 items-center">
        <div className="flex">
          <Link className="flex items-center space-x-2" href="/">
            <h1 className="text-2xl font-bold">
              Notechain
            </h1>
          </Link>
        </div>
        <div>
          <button disabled={true} className="px-3 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm disabled:opacity-50 disabled:bg-blue-600 disabled:hover:bg-blue-600 cursor-not-allowed">
              Join now
          </button>
        </div>
      </div>
    </header>
  );
}
