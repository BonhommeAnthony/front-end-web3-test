"use client";

import { Alchemy, Network, Nft } from "alchemy-sdk";
import { useState, useEffect } from "react";
import CardsGrid from "@/components/cards-grid";
import { SearchBar } from "@/components/search-bar";

async function getNFTs(): Promise<Nft[]> {
    const config = {
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(config);
    const address = "0x9a38dec0590abc8c883d72e52391090e948ddf12";
    const response = await alchemy.nft.getNftsForContract(address);
    return response.nfts;
}

export default function Home() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setLoading] = useState(true);
    const [nfts, setNfts] = useState<Nft[]>([]);

    useEffect(() => {
        const fetchNfts = async () => {
            setLoading(true);
            const nfts = await getNFTs();
            setNfts(nfts);
            setLoading(false);
        };
        fetchNfts();
    }, []);

    const filteredNfts = nfts.filter((nft) => nft.title.toLowerCase().includes(searchTerm.toLowerCase()));
    // console.log("🚀 ~ file: page.tsx:35 ~ Home ~ filteredNfts:", filteredNfts);

    return (
        <main>
            <SearchBar onSearch={setSearchTerm} />
            <CardsGrid filteredNfts={filteredNfts} isLoading={isLoading} />
        </main>
    );
}
