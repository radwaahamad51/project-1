import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EqCard from "./MyEqCard";


const MyEquepment = () => {
    
    const loadedData = useLoaderData();
    const [myCard, setMyCard] = useState(loadedData); 

    return (
        <div className="flex justify-center items-center flex-wrap gap-6">
            {myCard.length ? (
                myCard.map((item) => (
                    <EqCard
                        key={item._id}
                        items={item}
                        myCard={myCard}
                        setMyCard={setMyCard}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500 mt-10">No equipment found!</p>
            )}
        </div>
    );
};

export default MyEquepment;