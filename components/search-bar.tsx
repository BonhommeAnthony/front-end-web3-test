import { Input } from "./ui/input";

export interface ISearchBarProps {
    inputValue: string;
    setInputValue: (value: string) => void;
}

export function SearchBar({ inputValue, setInputValue }: ISearchBarProps) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <Input
            type="search"
            placeholder="Search"
            onChange={handleSearch}
            value={inputValue}
            className="my-4 text-base "
        />
    );
}
