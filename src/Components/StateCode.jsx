import React from 'react'
import { useTheme } from '../Context/Theme';

function StateCode() {
    const { theme } = useTheme();
    const StateCode = [
        {
            id: 1,
            state: 200,
            mean: "OK sab sahi hai - All right "
        },
        {
            id: 2,
            state: 201,
            mean: "Created - A new record is created in clint side (Frontend) "
        },
        {
            id: 3,
            state: 400,
            mean: "Bad request - galat data is coming / calling"
        },
        {
            id: 4,
            state: 401,
            mean: "Unauthorized - login nahi"
        },
        {
            id: 5,
            state: 403,
            mean: "Forbidden  - login hai but access nahi hai"
        },
        {
            id: 6,
            state: 404,
            mean: "Not Found - record nahi hai"
        },
        {
            id: 7,
            state: 409,
            mean: "Conflict - pehle se exist karta hai"
        },
        {
            id: 8,
            state: 500,
            mean: "Server Error - hamare side se Gadbad "
        }
    ]
    return (
        <>
            <div className='p-2 my-1 grid grid-cols-1 md:grid-cols-2 '>

                {StateCode.map((item, idx) => (
                    <ul
                        key={idx}
                    >
                        <li
                            className={`p-1 m-2 font-semibold rounded ${theme === "dark" ? "border " : "border"}`}
                        >{item.id} :-  {item.state} = {item.mean}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default StateCode