import React, { createContext } from "react";
import { Hooks } from "./Hooks";

const FirstName = createContext();
const LastName = createContext();

const Main = () => {

    return (
        <>
            <FirstName.Provider value={"tilak"}>
                <LastName.Provider value={"saxena"}>
                    <Hooks />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export { Main };
export { FirstName, LastName};