/* eslint-disable react/prop-types */

const DisplayInstractors = ({item}) => {
    const { name, image, email, } = item;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl  h-[400px] p-4">
        <figure>
          <img className="rounded-xl"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2>{email}</h2>
          
        </div>
        <button className="btn btn-outline ">Select Now</button>
      </div>
      
    </div>
  );
};

export default DisplayInstractors;