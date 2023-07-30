/* eslint-disable react/prop-types */

const DisplayAllClasses = ({item}) => {
    const { name, image, phone, email, details,instructor,seats,price } = item;
    return (
      <div className="">
        <div className="card card-compact w-96 bg-base-100 shadow-xl  h-[620px] p-4">
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
            <h2 className="text-2xl text-slate-900 font-semibold">Instractor Name {instructor}</h2>
            <div className="flex text-lg text-orange-700 font-semibold">
                <p>Available seats : {seats}</p>
                <p>Course Fee : {price}</p>
            </div>
            <button className="btn btn-outline ">Enroll Now</button>
          </div>
        </div>
      </div>
    );
  };
  

export default DisplayAllClasses;