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
        <div className="container grid lg:grid-cols-2">
            <div className="first-div">
                <div
                    className="sub-div"
                    onMouseEnter={() => handleSubDivHover(0)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img src={image1} alt="Image 1" />
                    <div>
                        <h2>Title 1</h2>
                        <p>Text 1</p>
                    </div>
                </div>
                <div
                    className="sub-div"
                    onMouseEnter={() => handleSubDivHover(1)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img src={image2} alt="Image 2" />
                    <h2>Title 2</h2>
                    <p>Text 2</p>
                </div>
                <div
                    className="sub-div"
                    onMouseEnter={() => handleSubDivHover(2)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img src={image3} alt="Image 3" />
                    <h2>Title 3</h2>
                    <p>Text 3</p>
                </div>
            </div>
            <div className="second-div">
                <img src={getImageSource()} alt="Second Div Image" />
            </div>
        </div>
    );
};

export default GuideLine;
