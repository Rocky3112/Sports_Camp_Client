/* eslint-disable react/prop-types */


const PartTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-4">
            
            <p className="text-3xl uppercase font-semibold border-y-2 py-2 ">{heading}</p>
        </div>
    );
};

export default PartTitle;