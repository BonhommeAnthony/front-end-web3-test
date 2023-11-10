import { Skeleton } from "./ui/skeleton";

export interface ISkeletonCollectionInfoProps {}

export function SkeletonCollectionInfo(props: ISkeletonCollectionInfoProps) {
    return (
        <div className=" md:flex w-full justify-between space-y-4 md:space-y-4 ">
            <div className="md:w-1/3 space-y-8">
                <div className="flex space-x-4 ">
                    <Skeleton className="overflow-hidden rounded-lg h-40 w-40 relative " />
                    <div>
                        <Skeleton className="w-40 h-16" />
                        <Skeleton className=" w-44 h-8 mt-2 " />
                    </div>
                </div>
                <div>
                    <Skeleton className="w-full h-8 my-4" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 md:w-1/3 self-start">
                <Skeleton className="w-full h-16" />
                <Skeleton className="w-full h-16" />
                <Skeleton className="w-full h-16" />
                <Skeleton className="w-full h-16" />
                <Skeleton className="w-full h-16" />
                <Skeleton className="w-full h-16" />
            </div>
        </div>
    );
}
