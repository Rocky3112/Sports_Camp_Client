import { Fade, Slide } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const Partnarship = () => {
    const icons = [
        'https://cdn-icons-png.flaticon.com/128/300/300221.png',
        'https://cdn-icons-png.flaticon.com/128/0/747.png',
        'https://cdn-icons-png.flaticon.com/128/882/882749.png',
        'https://cdn-icons-png.flaticon.com/128/882/882747.png',
        'https://cdn-icons-png.flaticon.com/128/6528/6528793.png',
        'https://cdn-icons-png.flaticon.com/128/5968/5968927.png',
        'https://cdn-icons-png.flaticon.com/128/732/732221.png',
        'https://cdn-icons-png.flaticon.com/128/882/882740.png',
        'https://cdn-icons-png.flaticon.com/128/882/882711.png',
        'https://cdn-icons-png.flaticon.com/128/882/882722.png',
        'https://cdn-icons-png.flaticon.com/128/220/220214.png',
        'https://cdn-icons-png.flaticon.com/128/5977/5977590.png',
        'https://cdn-icons-png.flaticon.com/128/10096/10096351.png'
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