import { Input } from "./ui/input";

export interface ISearchBarProps {
    onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: ISearchBarProps) {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return <Input type="search" placeholder="Search" onChange={handleSearch} className="my-4" />;
}
