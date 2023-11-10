import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface ICollectionDetailsProps {}

export function CollectionDetails(props: ICollectionDetailsProps) {
    return (
        <div className="grid grid-cols-3 gap-1 md:w-1/3 self-start">
            <DetailsCard title="Floor" value="1.6 ETH" />
            <DetailsCard title="Volume" value="8.768 ETH" />
            <DetailsCard title="Owners" value="2773" />
            <DetailsCard title="Items" value="7777" />
            <DetailsCard title="Best offer" value="1.23 ETH" />
            <DetailsCard title="Royalties" value="5%" />
        </div>
    );
}

const DetailsCard = ({ title, value }: { title: string; value: string }) => {
    return (
        <Card className="self-start p-2 ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                <CardTitle className="text-sm font-medium p-0 ">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <p className="text-md text-muted-foreground m-0 font-bold ">{value}</p>
            </CardContent>
        </Card>
    );
};
