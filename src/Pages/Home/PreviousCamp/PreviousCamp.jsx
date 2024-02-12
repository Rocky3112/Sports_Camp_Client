import forest from '../../../assets/images/img-1.webp'
import mountain from '../../../assets/images/img-2.webp'
import hiking from '../../../assets/images/img-3.webp'
import kayaking from '../../../assets/images/img-4.webp'
import PartTitle from '../../../components/PartTitle/PartTitle';
const PreviousCamp = () => {
    return (

        <div className=''>
            <div className='py-10 '>
           <PartTitle heading={'Our Previous camp'}></PartTitle>
            <div className=' grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <div className="card w-72 h-[450px] bg-base-100 hover:bg-slate-300 mx-auto">
                    <figure><img className='rounded-full hover:scale-105 p-3 duration-1000 h-52' src={forest} /></figure>
                    <div className="card-body m-2 p-2 ">
                        <h2 className="card-title text-3xl  font-semibold text-amber-600">FOREST <br /> ADVENTURE</h2>
                        <p className=''>In iaculis nunc sed augue lacus viverra vitae congue volutpat bland</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-2xl hover:bg-amber-600 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 h-[450px] mx-auto bg-slate-300">
                    <figure><img className='rounded-full hover:scale-105 p-3 duration-1000 h-52' src={mountain} /></figure>
                    <div className="card-body m-2 p-2 ">
                        <h2 className="card-title text-3xl  font-semibold text-amber-600">Mountain <br /> Climbing</h2>
                        <p>Mauris pharetra et ultrices neque ornare aenean euismod elemen</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-2xl hover:bg-amber-600 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 h-[450px] mx-auto bg-base-100 hover:bg-slate-300">
                    <figure><img className='rounded-full hover:scale-105 p-3 duration-1000 h-52' src={hiking} /></figure>
                    <div className="card-body m-2 p-2 ">
                        <h2 className="card-title text-3xl font-semibold text-amber-600">Hiking </h2>
                        <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-2xl hover:bg-amber-600 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 h-[450px] mx-auto bg-base-100 hover:bg-slate-300">
                    <figure><img className='rounded-full hover:scale-105 p-3 duration-1000 h-52' src={kayaking} /></figure>
                    <div className="card-body m-2 p-2 ">
                        <h2 className="card-title text-3xl  font-semibold text-amber-600">Kayaking</h2>
                        <p>Suspendisse interdum consectetur libero id faucibus dolor mag</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-2xl hover:bg-amber-600 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PreviousCamp;