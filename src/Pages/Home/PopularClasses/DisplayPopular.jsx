/* eslint-disable react/prop-types */

import { Zoom } from "react-awesome-reveal";

const DisplayPopular = ({ item }) => {
  // console.log(item);
  const { name, image, phone, email, details } = item;
  return (
    <div className="lg:pt-20 pt-7">
      <Zoom duration={2000}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl  h-[420px] p-4">
        <figure className="rounded-xl ">
          <img className="rounded-xl hover:scale-110 p-3 duration-1000 w-full h-72"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-amber-500">{name}</h2>
          <p>{details}</p>
          <h2>{email}</h2>
          <h2>{phone}</h2>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default DisplayPopular;
