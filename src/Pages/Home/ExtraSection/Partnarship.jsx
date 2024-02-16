import { Fade, Slide } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const Partnarship = () => {
    const icons = [
        'https://www.webguru-india.com/blog/wp-content/uploads/2011/09/Adidas.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-A9QaxyOyMbLo6cGYWIgSKXzSfI0hJIiaw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnBKJcWSrBSoTgk4WfDg0dJIOfwjmQyuo3g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PUEgGh4RaXA_11mW957jdS_J4T64LbMfgg&usqp=CAU',
        'https://thumbs.dreamstime.com/b/sports-logo-vector-drawing-isolated-white-background-51609445.jpg',
        'https://m.media-amazon.com/images/I/61QFTAHWfYL.png',
        'https://cdn-icons-png.flaticon.com/128/732/732221.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9haDH3Y_WkA8gDc0pXoHVLiCRUXGNrslX5Q&usqp=CAU',
        'https://cdn-icons-png.flaticon.com/128/882/882711.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTR2USgaqJTFVQmjodC5zRtJOB4PS1PdMuQ&usqp=CAU',
        'https://cdn-icons-png.flaticon.com/128/220/220214.png',
        'https://cdn-icons-png.flaticon.com/128/5977/5977590.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCjEdMKjZasFp9aE_pt0KMc4iRaIHGl3jvQ&usqp=CAU'
      ];
  return (
    <div>
        <section className='mt-20'>

<div className='my-10 text-center'> 
      <Slide>
      <h3 className='text-3xl font-bold text-yellow-700'>Our Partnerships</h3>
      </Slide>
      <Fade className='font-semibold text-yellow-800' delay={1e3} cascade damping={1e-1}>
     <i> We are pleased to work with thousands of partners.- Those who work with us globally include:</i>

      </Fade>
      
     </div>
    
      <Marquee speed={60}>
     
        <div className="flex gap-4 px-10 mb-7">
          {icons.map((icon, i) => (
            <img
              key={i}
              src={icon}
              className="object-cover p-3 transition duration-300 border border-black rounded-full hover:border-green-600 hover:border-2 h-28 w-28 hover:bg-yellow-500"
              data-aos="fade-up" // Apply aos animation to the image
            />
          ))}
        </div>
       
      </Marquee>
        </section>
    </div>
  )
}

export default Partnarship