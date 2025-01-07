import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EqCard = ({ items, myCard, setMyCard }) => {
    const { _id, Image, ItemName, CategoryName, Descriptione, Price, Rating } = items;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-opal.vercel.app/allitem/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            const remainingItems = myCard.filter((item) => item._id !== _id);
                            setMyCard(remainingItems); // Update the state
                        }
                    });
            }
        });
    };

    return (
        <div className="card bg-base-100 w-80 shadow-xl bg-gradient-to-r from-green-400 to-blue-400">
            <h2>radwa</h2>
            <figure className="px-10 pt-10">
                <img src={Image} alt={ItemName} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title">{ItemName}</h2>
                <p>{CategoryName}</p>
                <p>{Descriptione}</p>
                <p className="font-bold">Price: {Price}</p>
                <p>Rating: ⭐{Rating}</p>
                <div className="card-actions flex justify-around mt-3">
                    <div>
                    <button
                        className="btn btn-error"
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                    </div>
                   <div className="">
                   <Link to={`/update/${_id}`} className="btn btn-warning "> Update</Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default EqCard;