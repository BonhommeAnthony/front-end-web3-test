import { Alchemy, Network, Nft } from "alchemy-sdk";
import HomePage from "@/components/home-page";

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

export default async function Home() {
    const nfts = await getNFTs();

    return <HomePage nfts={nfts} />;
}
