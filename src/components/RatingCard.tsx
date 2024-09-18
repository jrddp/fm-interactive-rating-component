"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export default function RatingCard() {
    const [rating, setRating] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    return <Card className="flex flex-col w-full max-w-md gap-4 p-8 border-none rounded-3xl">

        <div className="flex items-center justify-center mb-6 rounded-full size-14 bg-muted">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
        </div>

        <h1 className="text-3xl">
            How did we do?
        </h1>

        <p className="text-muted-foreground">
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
        </p>

        <div className="flex justify-between w-full mb-4" onMouseLeave={() => setHovered(null)}>
            {[1, 2, 3, 4, 5].map((num) => {
                return <Button onClick={(() => setRating(num))}
                    onMouseOver={() => setHovered(num)}
                    className={cn("flex items-center justify-center text-lg rounded-full bg-muted text-muted-foreground size-14 hover:bg-primary hover:text-background", num === rating && (hovered && num !== hovered ? "bg-white text-background" : "bg-primary text-background"))} key={num}>{num}</Button>
            })}
        </div>

        <Button className="py-2 font-bold tracking-widest uppercase rounded-full text-background h-fit hover:bg-white">
            Submit
        </Button>

    </Card>;
}