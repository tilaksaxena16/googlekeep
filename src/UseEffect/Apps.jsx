import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Apps = () => {

    const [num, setNum] = useState(0);

    useEffect(() =>{
        document.title = `you clicked me ${num} times`;
    });

    return (
        <>
            <button
                className="button"
                onClick={() => {
                    setNum(num + 1);
                }}
            
            >
                click me {num}
            </button>
        </>
    );
};

export { Apps };