import * as React from "react";
import { Skeleton } from "./ui/skeleton";

export interface ISkeletonSearchBarProps {}

export function SkeletonSearchBar(props: ISkeletonSearchBarProps) {
    return <Skeleton className="w-full h-8 my-4 " />;
}
