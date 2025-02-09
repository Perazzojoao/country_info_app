import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-primary px-3 py-2 sm:p-5 mb-5 z-50 sticky top-0 w-full shadow-md">
      <div className="flex items-center justify-start gap-6">
        <Link href="/">
          <h1 className="uppercase text-white font-bold text-2xl sm:text-4xl">Countries Info App</h1>
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;