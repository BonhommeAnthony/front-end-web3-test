import { OpenSeaCollectionMetadata } from "alchemy-sdk";
import Image from "next/image";
import { useState } from "react";

export interface ICollectionDescriptionProps {
    collectionInfo: OpenSeaCollectionMetadata | undefined;
}

export function CollectionDescription({ collectionInfo }: ICollectionDescriptionProps) {
    const collectionName = collectionInfo?.collectionName;
    const collectionDescription = collectionInfo?.description || "";
    const collectionImageUrl = collectionInfo?.imageUrl;

    const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);

    const shortDescription =
        collectionDescription?.length > 80 ? collectionDescription?.slice(0, 80) + "...." : collectionDescription;

    const isDescriptionTruncated = collectionDescription?.length > 80;
    return (
        <div className="md:w-1/3 space-y-8">
            <div className="flex space-x-4 ">
                <Image
                    src={collectionImageUrl as string}
                    alt="collection image"
                    width={100}
                    height={100}
                    className="rounded-md w-auto h-auto"
                />
                <div>
                    <h2 className="text-6xl font-bold">{collectionName}</h2>
                    <p className="text-sm font-bold ">Created By ScreenshotLabs</p>
                </div>
            </div>
            <div>
                <p className="text-sm ">
                    {isFullDescriptionShown ? collectionDescription : shortDescription}
                    {isDescriptionTruncated && (
                        <button
                            className="text-blue-500 hover:text-blue-800 text-sm px-1 "
                            onClick={() => setIsFullDescriptionShown(!isFullDescriptionShown)}
                        >
                            {isFullDescriptionShown ? "Show Less" : "Show More"}
                        </button>
                    )}
                </p>
            </div>
        </div>
    );
}
