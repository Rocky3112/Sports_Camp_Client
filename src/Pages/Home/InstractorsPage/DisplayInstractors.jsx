/* eslint-disable react/prop-types */

import { Zoom } from "react-awesome-reveal";

const DisplayInstractors = ({item}) => {
    const { name, image, email, } = item;
  return (
    <div className=" lg:pt-20 pt-7">
      <Zoom duration={2000}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl  h-[400px] p-4">
        <figure>
          <img className="rounded-xl w-full hover:scale-110 h-72 p-3 duration-1000"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2>{email}</h2>
          
        </div>
        <button className="btn btn-outline ">Select Now</button>
      </div>
      </Zoom>
      
    </div>
  );
};

export default DisplayInstractors;