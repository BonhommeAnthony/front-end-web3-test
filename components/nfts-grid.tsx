import NftCard from "./nft-card";
import { Nft } from "alchemy-sdk";
import { NftsFilter } from "./nfts-filter";

export interface INftsGridProps {
    nfts: Nft[];
}

export function NftsGrid({ nfts }: INftsGridProps) {
    return (
        <div className="flex w-full space-y-4 md:space-y-4 space-x-4">
            <NftsFilter />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
                {nfts.map((nft) => (
                    <NftCard key={nft.tokenId} nft={nft} />
                ))}
            </div>
        </div>
    );
}
