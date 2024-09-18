"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Star } from "./svgs/Star";
import { ThankYou } from "./svgs/ThankYou";

export default function RatingCard() {
    const [rating, setRating] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);

    if (!submitted) {
        return (
            <Card className="flex flex-col w-full max-w-md gap-4 p-6 border-none sm:p-8 rounded-3xl">
                <div className="flex items-center justify-center rounded-full sm:mb-6 size-12 sm:size-14 bg-muted">
                    <Star />
                </div>

                <h1 className="text-2xl sm:text-3xl">
                    How did we do?
                </h1>

                <p className="text-sm text-muted-foreground sm:text-base">
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>

                <div className="flex justify-between w-full mb-4" onMouseLeave={() => setHovered(null)}>
                    {[1, 2, 3, 4, 5].map((num) => {
                        return <Button onClick={(() => setRating(num))}
                            onMouseOver={() => setHovered(num)}
                            className={cn("flex items-center justify-center sm:text-lg rounded-full bg-muted text-muted-foreground size-12 sm:size-14 hover:bg-primary hover:text-background", num === rating && (hovered && num !== hovered ? "bg-white text-background" : "bg-primary text-background"))} key={num}>{num}</Button>
                    })}
                </div>

                <Button onClick={() => rating && setSubmitted(true)} className="py-2 font-bold tracking-widest uppercase rounded-full text-background h-fit hover:bg-white">
                    Submit
                </Button>
            </Card>
        );
    } else {
        return (
            <Card className="flex flex-col items-center w-full max-w-md gap-6 p-6 py-8 text-center border-none sm:p-10 rounded-3xl">
                <ThankYou />

                <div className="px-4 py-2 text-sm rounded-full bg-muted text-primary w-fit">
                    You selected {rating} out of 5
                </div>

                <div className="space-y-2 sm:space-y-4">
                    <h1 className="text-2xl sm:text-3xl">
                        Thank you!
                    </h1>

                    <p className="text-sm text-muted-foreground sm:text-base">
                        We appreciate you taking the time to give a rating. If you ever need more support,
                        don't hesitate to get in touch!
                    </p>
                </div>
            </Card>
        );
    }
}