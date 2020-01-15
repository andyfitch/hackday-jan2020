import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="flex h-100 bg-parallax text-white">
      <div className="flex flex-grow flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto py-1">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-bold text-white text-xl">
              Hack Day Jan 2020
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
