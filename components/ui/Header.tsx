import Link from "next/link";
import { Button } from "primereact/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Mateus
            <span className="header-name-dot-color">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button
              label="Hire me"
              className="hire-me-button text-neutral-800 font-medium py-2 px-4 rounded-lg  transition duration-300"
            />
          </Link>
        </div>

        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
