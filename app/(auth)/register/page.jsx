import { Button } from "@/components/ui/button"
const Page = () => {
    return (
        <>
        
        <section className="w-[95%] mx-auto py-4 my-12 max-w-[1000px]">
            <main className="flex items-center justify-center sm:items-stretch">
                <div className="w-full md:w-1/2 bg-[url('/images/chair.png')] bg-center bg-cover bg-zinc-600 rounded-s-md shadow-sm md:flex items-end justify-center hidden ">
                    <div className="bg-stone-800 shadow-xl w-[90%] mx-auto mb-6 py-6 px-8  rounded-xl bg-opacity-30 space-y-4">
                        <div className="space-y-1">
                            <h1 className="text-white text-xl uppercase font-bold font-serif">Timeless Designs:</h1>
                            <p className="text-slate-300">Stylish, comfortable, and built to last.</p>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-white text-xl uppercase font-bold font-serif">Exclusive Discounts:</h1>
                            <p className="text-slate-200">Save big on premium furniture.</p>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-white text-xl uppercase font-bold font-serif">Quality Guaranteed:</h1>
                            <p className="text-slate-200">Crafted with care, made to last.</p>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-white text-xl uppercase font-bold font-serif">24/7 Support:</h1>
                            <p className="text-slate-200">We're here whenever you need us.</p>
                        </div>

                    </div>
                </div>
                <div className="w-full md:w-1/2 max-w-[500px] border border-gray-300 p-10 rounded-e-lg shadow-sm">
                    <h1 className="font-extrabold text-[28px] leading-10 font-cinzel uppercase">
                        Elevate Your Home with Timeless Furniture
                    </h1>
                    <p className="text-gray-400 py-2 font-cinzel">
                        Discover elegant, high-quality pieces designed to transform your space.
                    </p>
                    <form action="" className="flex flex-col gap-1 my-8">
                        <label htmlFor="username" className="font-cinzel">UserName</label>
                        <input type="text" name='username' id='username' className="outline-none px-4 py-2 border border-gray-300 rounded-sm placeholder:text-sm mb-4 shadow" placeholder="Enter username" />

                        <label htmlFor="email" className="font-cinzel">Email</label>
                        <input type="email" name='email' id='email' className="outline-none px-4 py-2 border border-gray-300 rounded-sm placeholder:text-sm mb-4 shadow" placeholder="Enter email" />

                        <label htmlFor="password" className="font-cinzel">Password</label>
                        <input type="password" name='password' id='password' className="outline-none px-4 py-2 border border-gray-300 rounded-sm placeholder:text-sm mb-4 shadow" placeholder="Enter password" />

                        <label htmlFor="confpass" className="font-cinzel">Confirm Password</label>
                        <input type="password" name='confpass' id='confpass' className="outline-none px-4 py-2 border border-gray-300 rounded-sm placeholder:text-sm mb-4 shadow" placeholder="Confirm password" />

                        <Button className='mt-6 bg-zinc-700' size='lg'> Register – Start Shopping</Button>
                    </form>
                </div>

            </main>


        </section>
</>
    )
}

export default Page
