import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input";

const FindMatch = () => {
    const [count, setCount] = useState(false);
    const [value, setValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <>
            <h2>Find Match</h2>
            <Button onClick={() => setCount(!count)}>
                {count.valueOf() ? "Hide" : "Show"}
            </Button>
            <Input value={value} onChange={handleInputChange}/>
        </>
    )
}

export default FindMatch;