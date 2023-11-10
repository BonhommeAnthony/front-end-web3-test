import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export interface INftsFilterProps {}

export function NftsFilter(props: INftsFilterProps) {
    return (
        <div className="hidden lg:block w-96 mt-4 ">
            <Card>
                <CardHeader>
                    <CardTitle className="text-sm">Status</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="flex w-full  space-x-4">
                        <Button variant="outline" className="w-full">
                            All
                        </Button>
                        <Button variant="secondary" className="w-full">
                            Buy now
                        </Button>
                    </div>
                    <Separator className="mt-4" />
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Price</AccordionTrigger>
                            <AccordionContent>Prices</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Marketplace</AccordionTrigger>
                            <AccordionContent>Markeplaces</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Properties</AccordionTrigger>
                            <AccordionContent>Properties</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}
