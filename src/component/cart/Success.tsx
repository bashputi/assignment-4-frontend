import { Link } from "react-router-dom";


const Success = () => {
    return (
        <div className="justify-center items-center h-[60vh]  flex ">
            <div className="text-center">
            <h1 className="text-xl text-green-600 font-semibold pb-5">Congratulation!</h1>
            <p>Your Product Will Deliverd To Your Address</p>

            <div>
                <Link to="/"><button className="bg-[#003856] text-white p-2 rounded mt-5">Home Page</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Success;