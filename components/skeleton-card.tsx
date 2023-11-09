import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
    return (
        <Card className="group border-2 hover:border-destructive cursor-pointer transition-all duration-300 ease-in-out py-2">
            <CardHeader className="py-0 px-2">
                <Skeleton className="overflow-hidden rounded-lg h-52 relative "></Skeleton>
                <div>
                    <Skeleton className="w-20 h-8"></Skeleton>
                    <Skeleton className="w-20 h-8 mt-2 "></Skeleton>
                </div>
            </CardHeader>
            <CardContent className="px-2">
                <Skeleton className="w-full h-12 mt-2"></Skeleton>
            </CardContent>
        </Card>
    );
}
