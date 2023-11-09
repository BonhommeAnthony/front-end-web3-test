"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Nft } from "alchemy-sdk";
import { useToast } from "./ui/use-toast";

export default function NftCard({ nft }: { nft: Nft }) {
    const { toast } = useToast();
    return (
        <Card className="group border-2 hover:border-destructive cursor-pointer transition-all duration-300 ease-in-out py-2">
            <CardHeader className="py-0 px-2">
                <div className="overflow-hidden rounded-lg h-52 relative ">
                    {nft.rawMetadata?.image?.includes("mp4") ? (
                        <video
                            muted
                            loop
                            autoPlay
                            src={nft.rawMetadata.image}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    ) : (
                        <Image
                            src={nft.rawMetadata?.image as string}
                            alt={nft.title}
                            fill
                            sizes="100vh"
                            style={{
                                objectFit: "cover",
                            }}
                            className="h-auto w-auto object-cover transition-all hover:scale-105"
                        />
                    )}
                </div>

                <div>
                    <CardTitle>{nft.title}</CardTitle>
                    <CardDescription className=" text-lg ">0.7 ETH</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="px-2 py-0">
                <Button
                    variant="destructive"
                    size="lg"
                    className="lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out w-full"
                    onClick={() => {
                        toast({
                            variant: "destructive",
                            title: "Uh oh! congratulation!",
                            description: "But sorry you just clicked on a button :).",
                        });
                    }}
                >
                    Buy Now
                </Button>
            </CardContent>
        </Card>
    );
}
