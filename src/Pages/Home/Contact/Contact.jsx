
const Contact = () => {
    return (
        <div className='my-12 bg-base-200 p-4 lg:p-12'>
            <h1 className="text-3xl font-bold text-center my-3">Contact</h1>
            <div className='flex flex-col md:flex-row justify-center gap-8 lg:gap-28' >
                <div className='card w-80 md:w-96 p-4  hover:bg-base-300'>
                    <div className=''>
                        <h2 className="text-2xl">Phone</h2>
                        <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <a href="tel:+8801772893112">+8801772893112</a>
                        </figure>
                    </div>
                    <div className='my-5'>
                        <h2 className="text-2xl">Email</h2>
                        <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:support@powertools.com">support@powertools.com</a>
                        </figure>
                    </div>
                    <div>
                        <h2 className="text-2xl">Address</h2>
                        <figure style={{ justifyContent: 'flex-start' }} className='flex items-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-12" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <address>Kajla, Matihar, Rajshahi </address>
                        </figure>
                    </div>
                </div>
                <div className=' card w-80 md:w-96 p-4 hover:bg-base-300'>
                    <h3 className="text-xl text-center">Email Us</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Your message is here"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Send</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;