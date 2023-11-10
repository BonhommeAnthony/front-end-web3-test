import { SkeletonSearchBar } from "@/components/Skeleton-search-bar";
import SkeletonCard from "@/components/skeleton-card";
import { SkeletonCollectionInfo } from "@/components/skeleton-collection-info";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main>
            <SkeletonCollectionInfo />
            <SkeletonSearchBar />
            <div className="flex w-full space-y-4 md:space-y-4 space-x-4">
                <Skeleton className="w-80 h-96 " />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
                    {[...Array(20)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        </main>
    );
}
