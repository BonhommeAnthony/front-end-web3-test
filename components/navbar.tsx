import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-2">
            <h1>ArkProject</h1>
            <ModeToggle />
        </nav>
    );
}
