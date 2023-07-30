import image1 from '../../../assets/images/image1.jpeg'
import image2 from '../../../assets/images/image2.jpeg'
import image3 from '../../../assets/images/image3.jpeg'
import image4 from '../../../assets/images/image4.jpeg'
import image5 from '../../../assets/images/image5.jpeg'
import image6 from '../../../assets/images/image6.jpeg'

const Banner = () => {
  return (
    <>
      <div>
        <div className="carousel h-[600px]">
        <div id="item1" className="carousel-item w-full grid">
          <img src={image1} className="w-full h-[600px]" />
          <div className="carousel-caption text-center">
            <h2 className="text-3xl font-semibold">Cricket Camp</h2>
            <p className="">
              Join our exciting Cricket camp and learn from experienced coaches.
              Improve your skills, make new friends, and have a blast on the
              field! Open to players of all skill levels.
            </p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full grid">
          <img src={image2} className="w-full" />
          <div className="carousel-caption text-center">
            <h2 className="text-3xl font-semibold">Football Camp</h2>
            <p className="">
              Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.
            </p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full grid">
          <img src={image3} className="w-full" />
          <div className="carousel-caption text-center">
            <h2 className="text-3xl font-semibold">Volleyball Camp</h2>
            <p className="">
              Serve, volley, and smash your way to success at our Volleyball
              Camp. Our expert coaches will help you refine your technique and
              take your game to the next level.
            </p>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full grid">
          <img src={image4} className="w-full" />
          <div className="carousel-caption text-center">
            <h2 className="text-3xl font-semibold">Football Camp</h2>
            <p className="">
              Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.
            </p>
          </div>
        </div>
        <div id="item5" className="carousel-item w-full grid">
          <img src={image5} className="w-full" />
          <div className="carousel-caption text-center">
            <h2 className="text-3xl font-semibold">Football Camp</h2>
            <p className="">
              Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.
            </p>
          </div>
        </div>
        <div id="item6" className="carousel-item w-full grid">
          <img src={image6} className="w-full" />
          <div className="carousel-caption text-center">
            <h2 className="text-3xl font-semibold">Football Camp</h2>
            <p className="">
              Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
      </div>
    </>
  );
};

export default Banner;
