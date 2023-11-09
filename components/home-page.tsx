"use client";

import { SearchBar } from "./search-bar";
import { Nft } from "alchemy-sdk";
import NftCard from "./nft-card";
import { useCallback, useEffect, useState } from "react";
import { NftsGrid } from "./nfts-grid";

export interface IHomePageProps {
    nfts: Nft[];
}

export default function HomePage({ nfts }: IHomePageProps) {
    const [inputValue, setInputValue] = useState<string>("");
    const [initialList] = useState(nfts);
    const [filteredList, setFilteredList] = useState(nfts);

    const searchHandler = useCallback(() => {
        const filteredData = initialList.filter((nft) => {
            return nft.title.toLowerCase().includes(inputValue.toLowerCase());
        });
        setFilteredList(filteredData);
    }, [initialList, inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            searchHandler();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchHandler]);

    return (
        <main>
            <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
            <NftsGrid nfts={inputValue.length > 0 ? filteredList : initialList} />
        </main>
    );
}
