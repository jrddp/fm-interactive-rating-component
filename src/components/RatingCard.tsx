import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function RatingCard() {
    return <Card className="w-full max-w-md p-6 border-none rounded-lg">

        <h1>
            How did we do?
        </h1>

        <p>
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
        </p>

        {[1, 2, 3, 4, 5].map((rating) => {
            return <Button key={rating}>{rating}</Button>
        })}

        <Button>
            Submit
        </Button>

    </Card>;
}