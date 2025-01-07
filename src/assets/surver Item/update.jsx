import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../PRobider/AuthProvider";


const Update = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData()
    const { _id, Image, ItemName, CategoryName, Descriptione, Price, Rating, Customization, ProcessingTime, StockStatus } = data;
    const navigate = useNavigate();
    const handleupdate = event => {
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
            Image, ItemName, CategoryName, Descriptione, Price, Rating, Customization, ProcessingTime, StockStatus,
        };
        console.log(allValue);


        fetch(`https://assignment-10-opal.vercel.app/allitem/${_id}`, {
            method: 'PUT',
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
                    title: "Upadate successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/myequipment");
            })
    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center ">


                <form onSubmit={handleupdate} >
                    <h1 className="mb-7"> Update Data </h1>
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
                                className="input input-bordered input-info w-full max-w-xs  bg-orange-300"
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
                                className="input input-bordered input-info w-full max-w-xs bg-orange-300"
                                name="Image" defaultValue={Image} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Item Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Item Name"
                                className="input input-bordered input-success w-full max-w-xs bg-orange-300"
                                name="ItemName"
                                defaultValue={ItemName} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Category Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Category Name"
                                className="input input-bordered input-warning w-full max-w-xs bg-orange-300"
                                name="CategoryName"
                                defaultValue={CategoryName} />
                        </div>
                        <div >
                            <label className="label">
                                <span className="label-text text-cyan-400">Description</span>
                            </label>
                            <input
                            
                                type="text"
                                placeholder="Description"
                                className="input input-bordered input-info w-full max-w-xs bg-orange-300 bg-"
                                name="Description"
                                defaultValue={Descriptione}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price"
                                className="input input-bordered input-success w-full max-w-xs bg-orange-300"
                                name="Price"
                                defaultValue={Price} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Rating</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Rating"
                                className="input input-bordered input-warning w-full max-w-xs bg-orange-300"
                                name="Rating"
                                defaultValue={Rating} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Customization</span>
                            </label>
                            <input
                                type="text"
                                placeholder="bat with extra grip, hit paper etc"
                                className="input input-bordered input-info w-full max-w-xs bg-orange-300"
                                name="Customization"
                                defaultValue={Customization} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Processing Time</span>
                            </label>
                            <input
                                type="text"
                                placeholder="delivery time"
                                className="input input-bordered input-success w-full max-w-xs bg-orange-300"
                                name="ProcessingTime"
                                defaultValue={ProcessingTime} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-cyan-400">Stock Status</span>
                            </label>
                            <input
                                type="text"
                                placeholder="available product quantity"
                                className="input input-bordered input-warning w-full max-w-xs bg-orange-300"
                                name="StockStatus"
                                defaultValue={StockStatus} />
                        </div>
                        <div className="flex justify-center mt-10 ml-5">
                            <input type="submit" className="btn btn-outline btn-accent" value="Update" />
                        </div>
                    </div>
                </form>


            </div>

        </div>
    )
};
export default Update;