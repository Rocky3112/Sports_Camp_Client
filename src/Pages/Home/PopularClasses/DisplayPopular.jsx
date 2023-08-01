/* eslint-disable react/prop-types */

import { Zoom } from "react-awesome-reveal";

const DisplayPopular = ({ item }) => {
  // console.log(item);
  const { name, image, phone, email, details } = item;
  return (
    <div className="">
      <Zoom duration={2000}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl  h-[420px] p-4">
        <figure>
          <img className="rounded-xl"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
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
