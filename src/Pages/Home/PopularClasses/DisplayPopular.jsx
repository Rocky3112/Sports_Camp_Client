/* eslint-disable react/prop-types */

const DisplayPopular = ({ item }) => {
  console.log(item);
  const { name, image, phone, email, details } = item;
  return (
    <div className="">
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
          <button className="btn btn-outline ">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayPopular;
