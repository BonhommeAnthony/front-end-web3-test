import * as React from "react";
import NftCard from "./nft-card";
import { Nft } from "alchemy-sdk";

export interface INftsGridProps {
    nfts: Nft[];
}

export function NftsGrid({ nfts }: INftsGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {nfts.map((nft) => (
                <NftCard key={nft.tokenId} nft={nft} />
            ))}
        </div>
    );
}
