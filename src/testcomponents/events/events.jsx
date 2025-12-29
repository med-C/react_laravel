import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Click() {
    const [number, setnumber] = useState(0);

    console.log("Click() render"); // 🔥 chaque render déclenche ça

    return (
        <>
            <button onClick={() => setnumber(c => c + 1)}>
                increment
            </button>

            <button onClick={() => setnumber(0)}>
                reset
            </button>

            <label>number is : {number}</label>


            <Outlet />
        </>


    );
}
