import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import Image from "next/image";
import { SearchBar } from "./search-bar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <>
            <nav className=" w-full border-b px-6 justify-between">
                <div className="flex h-16 items-center ">
                    <div className="flex h-16 items-center space-x-16 ">
                        <Link href={"/"} passHref>
                            <h1 className="text-3xl">ArkMarket</h1>
                        </Link>
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 ">
                            <Link
                                href="/"
                                className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Explore
                            </Link>
                            <Link
                                href="/"
                                className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Create
                            </Link>
                            <Link
                                href="/"
                                className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Vision
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex px-12 w-2/4">
                        <Input className="bg-#0E2230 " />
                    </div>
                    <div className="ml-auto flex items-center space-x-4 md:space-x-6 ">
                        <Button variant="destructive">Connect</Button>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
            <div className="w-full h-64 bg-cover bg-no-repeat bg-[url('/arkHero.png')] "></div>
        </>
    );
}
