// import img1 from '../../../assets/images/image1.jpeg'
import image1 from '../../../assets/boat.jpg'
import image2 from '../../../assets/images/image2.jpeg'
import image3 from '../../../assets/images/image3.jpeg'
import image4 from '../../../assets/images/image4.jpeg'
import image5 from '../../../assets/images/image5.jpeg'
import image6 from '../../../assets/images/image6.jpeg'

const Bannert = () => {
  return (
    <>
      <div className="carousel w-full lg:h-[700px] h-[600px] shadow-xl">
        <div id="item1" className="carousel-item w-full ">
        <div className="card rounded-none w-full bg-base-100 ">
          <figure className="">
            <img src={image1} className=" lg:h-[700px] h-[400px] w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">River Rowing</h2>
            <p>Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.</p>
          </div>
        </div>
         
        </div>
        <div id="item2" className="carousel-item w-full">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="">
            <img src={image2} className=" lg:h-[700px] h-[400px] w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Football Academy</h2>
            <p>Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.</p>
          </div>
        </div>
         
        </div>
        <div id="item3" className="carousel-item w-full">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="">
            <img src={image3} className="lg:h-[700px] h-[400px] w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Swimming Camp</h2>
            <p>Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.</p>
          </div>
        </div>
         
        </div>
        <div id="item4" className="carousel-item w-full">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="">
            <img src={image4} className="lg:h-[700px] h-[400px] w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Volly </h2>
            <p>Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.</p>
          </div>
        </div>
         
        </div>
        <div id="item5" className="carousel-item w-full">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="">
            <img src={image5} className="lg:h-[700px] h-[400px]w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Basket Ball</h2>
            <p>Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.</p>
          </div>
        </div>
         
        </div>
        <div id="item6" className="carousel-item w-full">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="">
            <img src={image6} className="lg:h-[700px] h-[400px]w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Swimming</h2>
            <p>Serve, volley, and smash your way to success at our Football Camp.
              Our expert coaches will help you refine your technique and take
              your game to the next level.</p>
          </div>
        </div>
         
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-8">
      <a href="#item1" className="btn btn-xs">1</a>
      <a href="#item2" className="btn btn-xs">2</a>
      <a href="#item3" className="btn btn-xs">3</a>
      <a href="#item4" className="btn btn-xs">4</a>
      <a href="#item5" className="btn btn-xs">5</a>
      <a href="#item6" className="btn btn-xs">6</a>
      </div>
    </>
  );
};

export default Bannert;