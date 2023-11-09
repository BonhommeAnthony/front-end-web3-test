import SkeletonCard from "./skeleton-card";
import NftCard from "./nft-card";
import { Nft } from "alchemy-sdk";

interface CardsGridProps {
    isLoading: boolean;
    filteredNfts: Nft[];
}

export default function CardsGrid({ isLoading, filteredNfts }: CardsGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {isLoading ? (
                <>
                    {[...Array(20)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </>
            ) : (
                <>
                    {filteredNfts.map((nft) => (
                        <NftCard key={nft.tokenId} nft={nft} />
                    ))}
                </>
            )}
        </div>
    );
}
