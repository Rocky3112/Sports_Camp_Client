import React, { useState } from "react";
import useClasses from "../../Hooks/useClasses";
import DisplayAllClasses from "./DisplayAllClasses";

const AllClasses = () => {
  const [classes] = useClasses();
  const [showAll, setShowAll] = useState(false);

  // Slice the first 6 classes when not showing all
  const displayedClasses = showAll ? classes : classes.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <section className="my-10">
        {/* Add a button to toggle between showing all and first 6 */}
        
      </section>

      <div className="grid md:grid-cols-3 gap-4">
        {displayedClasses.map((cls) => (
          <DisplayAllClasses key={cls._id} cls={cls} />
        ))}
      </div>
      <div className="text-center py-5">
      <button
          onClick={toggleShowAll}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full "
        >
          {showAll ? "Show Less Classes" : "See All Classes"}
        </button>
      </div>
    </div>
  );
};

export default AllClasses;
