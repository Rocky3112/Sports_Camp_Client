

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
                return 'image1.jpg';
            case 1:
                return 'image2.jpg';
            case 2:
                return 'image3.jpg';
            default:
                return 'default-image.jpg'; // Change to your default image source
        }
    };

    return (
        <div className="container">
           
            <div className="first-div">
                
                <div
                    className="sub-div"
                    onMouseEnter={() => handleSubDivHover(0)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img src="image1.jpg" alt="Image 1" />
                    <h2>Title 1</h2>
                    <p>Text 1</p>
                </div>
               
                <div
                    className="sub-div"
                    onMouseEnter={() => handleSubDivHover(1)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img src="image2.jpg" alt="Image 2" />
                    <h2>Title 2</h2>
                    <p>Text 2</p>
                </div>
                
                <div
                    className="sub-div"
                    onMouseEnter={() => handleSubDivHover(2)}
                    onMouseLeave={handleSubDivLeave}
                >
                    <img src="image3.jpg" alt="Image 3" />
                    <h2>Title 3</h2>
                    <p>Text 3</p>
                </div>
            </div>


            <div className="second-div">
                <img src={getImageSource()} alt="Second Div Image" />
            </div>
        </div>
    );
}

export default GuideLine;