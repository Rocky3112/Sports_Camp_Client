import forest from '../../../assets/images/img-1.webp'
import mountain from '../../../assets/images/img-2.webp'
import hiking from '../../../assets/images/img-3.webp'
import kayaking from '../../../assets/images/img-4.webp'
const PreviousCamp = () => {
    return (

        <div className='py-10'>
            <h2 className=' text-center text-4xl font-bold uppercase py-12'>Our Previous camp</h2>
            <div className=' grid md:grid-cols-3 lg:grid-cols-4'>
                <div className="card w-72 bg-base-100">
                    <figure><img className='rounded-full' src={forest} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-semibold">FOREST <br /> ADVENTURE</h2>
                        <p>In iaculis nunc sed augue lacus viverra vitae congue volutpat bland</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-3xl hover:bg-yellow-500 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100">
                    <figure><img className='rounded-full' src={mountain} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-semibold">Mountain <br /> Climbing</h2>
                        <p>Mauris pharetra et ultrices neque ornare aenean euismod elemen</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-3xl hover:bg-yellow-500 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100">
                    <figure><img className='rounded-full' src={hiking} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-semibold">Hiking </h2>
                        <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-3xl hover:bg-yellow-500 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100">
                    <figure><img className='rounded-full' src={kayaking} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl  font-semibold">Kayaking</h2>
                        <p>Suspendisse interdum consectetur libero id faucibus dolor mag</p>
                        <div className="card-actions justify-end">
                            <button className=" bg-black text-white px-8 py-3  rounded-3xl hover:bg-yellow-500 font-semibold uppercase">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviousCamp;