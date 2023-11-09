import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
    return (
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[...Array(20)].map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </main>
    );
}
