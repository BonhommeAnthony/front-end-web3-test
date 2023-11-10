import { OpenSeaCollectionMetadata } from "alchemy-sdk";
import { CollectionDescription } from "./collection-description";
import { CollectionDetails } from "./collection-details";

export interface ICollectionInfoProps {
    collectionInfo: OpenSeaCollectionMetadata | undefined;
}

export function CollectionInfo({ collectionInfo }: ICollectionInfoProps) {
    return (
        <div className=" md:flex w-full justify-between space-y-4 md:space-y-4 mb-8 ">
            <CollectionDescription collectionInfo={collectionInfo} />
            <CollectionDetails />
        </div>
    );
}
