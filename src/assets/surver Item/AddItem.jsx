import { useContext } from "react";
import { AuthContext } from "../PRobider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Additem = () => {
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const Image = form.Image.value;
        const ItemName = form.ItemName.value;
        const CategoryName = form.CategoryName.value;
        const Descriptione = form.Description.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const Customization = form.Customization.value;
        const ProcessingTime = form.ProcessingTime.value;
        const StockStatus = form.StockStatus.value;
        const UserName = user?.displayName || 'Anonymous';
        const UserEmail = user?.email || 'No Email';
        const allValue = {
            Image, ItemName, CategoryName, Descriptione, Price, Rating, Customization, ProcessingTime, StockStatus, UserName,
            UserEmail
        };
        console.log(allValue);

        fetch('https://assignment-10-opal.vercel.app/allitem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your item has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate(location?.state ? location.state : "/");
            })

    }
    return (
        <div className="min-h-screen flex justify-center items-center ">

           
            <form onSubmit={handleAddItem}>
            <h1 className="mb-7"> Add Equipment</h1>
                <div className="card bg-base-100 w-full gap-4 max-w-lg shrink-0  p-10 grid grid-cols-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg
                outline-double outline-3 outline-offset-2">
                    


                    {/* User Name */}
                    <div>
                        <label className="label font-black">
                            <span className="label-text text-cyan-400">User Name</span>
                        </label>
                        <input
                            type="text"
                            value={user?.displayName || 'Anonymous'}
                            className="input input-bordered input-info w-full max-w-xs bg-orange-300"
                            name="UserName"
                            readOnly
                        />
                    </div>


                    {/* User Email */}
                    <div>
                        <label className="label font-black">
                            <span className="label-text text-cyan-400">User Email</span>
                        </label>
                        <input
                            type="email"
                            value={user?.email || 'No Email'}
                            className="input input-bordered input-success w-full max-w-xs bg-orange-300"
                            name="UserEmail"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="label font-black ">
                            <span className="label-text text-cyan-400">Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="photo-url"
                            className="input input-bordered input-info w-full max-w-xs"
                            name="Image" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Item Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Item Name"
                            className="input input-bordered input-success w-full max-w-xs"
                            name="ItemName" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Category Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Category Name"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="CategoryName" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered input-info w-full max-w-xs"
                            name="Description" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Price</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Price"
                            className="input input-bordered input-success w-full max-w-xs"
                            name="Price" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Rating</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Rating"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="Rating" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Customization</span>
                        </label>
                        <input
                            type="text"
                            placeholder="bat with extra grip, hit paper etc"
                            className="input input-bordered input-info w-full max-w-xs"
                            name="Customization" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Processing Time</span>
                        </label>
                        <input
                            type="text"
                            placeholder="delivery time"
                            className="input input-bordered input-success w-full max-w-xs"
                            name="ProcessingTime" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-cyan-400">Stock Status</span>
                        </label>
                        <input
                            type="text"
                            placeholder="available product quantity"
                            className="input input-bordered input-warning w-full max-w-xs"
                            name="StockStatus" />
                    </div>
                    <div className="flex justify-center mt-10 ml-5">
                        <input type="submit" className="btn btn-outline btn-accent" value="Add Item" />
                    </div>
                </div>
            </form>


        </div>
    )
}
export default Additem;