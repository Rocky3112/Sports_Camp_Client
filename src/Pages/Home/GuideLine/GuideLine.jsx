import { useState } from 'react';
import img1 from '../../../assets/images/guidePic/img-1.webp';
import img2 from '../../../assets/images/guidePic/img-2.webp';
import img3 from '../../../assets/images/guidePic/img-3.webp';
import image1 from '../../../assets/images/guidePic/subImg-1.webp';
import image2 from '../../../assets/images/guidePic/subImg-2.webp';
import image3 from '../../../assets/images/guidePic/subImg-3.webp';

const GuideLine = () => {
    // State to track the currently hovered sub-div
    const [hoveredSubDiv, setHoveredSubDiv] = useState(null);

    // Function to handle sub-div hover
    const handleSubDivHover = (index) => {
        setHoveredSubDiv(index);

    };

    // Function to reset the hover state
    const handleSubDivLeave = () => {
        setHoveredSubDiv(null);
    };

    // Determine the image source based on the hovered sub-div
    const getImageSource = () => {
        switch (hoveredSubDiv) {
            case 0:
                return img1;
            case 1:
                return img2;
            case 2:
                return img3;
            default:
                return img1; // Change to your default image source
        }
    };

    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold uppercase py-10 px-10 '>We Offer The Best</h2>
        <div className="container grid lg:grid-cols-2 gap-5">
            <div className="first-div">
                <div
                    className="sub-div flex items-center gap-5 py-5 hover:bg-yellow-500 hover:text-white rounded-lg p-8"
                    onMouseEnter={() => handleSubDivHover(0)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img className='rounded-full' src={image1} alt="Image 1" />
                    <div>
                        <h2 className='text-4xl font-bold pb-3'>Trained Guides</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, in? Odio corrupti commodi voluptas facere, quo sint labore exercitationem unde.</p>
                    </div>
                </div>
                <div
                    className="sub-div flex items-center gap-5 py-5  hover:bg-yellow-500 hover:text-white rounded-lg p-8"
                    onMouseEnter={() => handleSubDivHover(1)}
                    onMouseLeave={handleSubDivLeave}
                >
                     <img className='rounded-full' src={image2} alt="Image 1" />
                    <div>
                        <h2 className='text-4xl font-bold pb-3'>Healthy Food</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo voluptatum minus iste saepe iure accusantium ut animi? Eveniet, ipsam.</p>
                    </div>
                </div>
                <div
                    className="sub-div flex items-center gap-5 py-5  hover:bg-yellow-500 hover:text-white rounded-lg p-8"
                    onMouseEnter={() => handleSubDivHover(2)}
                    onMouseLeave={handleSubDivLeave}
                >
                     <img className='rounded-full' src={image3} alt="Image 1" />
                    <div>
                        <h2 className='text-4xl font-bold pb-3'>Free Fire Camp</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor cum corporis facere sed libero incidunt, id explicabo velit architecto!</p>
                    </div>
                </div>
            </div>
            <div className="second-div lg:w-full sm:w-1/2">
                <img className='rounded-md' src={getImageSource()} alt="Second Div Image" />
            </div>
        </div>
        </div>
    );
};

export default GuideLine;
