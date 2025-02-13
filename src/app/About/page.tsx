import Link from "next/link"
import NavAbout from "../component/NavAbout"
import NavbarTop from "../component/NavbarTop"
import Image from "next/image"



const About = () => {
    return (
        <div>

            <NavbarTop />

            <NavAbout />

            {/* A brand built  */}
            <div className="w-full flex  justify-center  items-center px-4">

                <div className="w-full max-w-[1250px] flex lg:flex-row flex-col lg:gap-0 gap-[40px] items-center justify-between mt-[88px] lg:mb-[89px] mb-[32px]">
                    <h1 className="md:text-[36px] text-[32px]  text-darkPurple">A brand built on the love of craftmanship,<br />quality and outstanding customer service</h1>

                    <button className="flex justify-center items-center lg:w-[192px] w-full  h-[56px] text-darkPurple  bg-lightGray"><Link href="#">View collection</Link></button>
                </div>

            </div>



            {/* sofa */}
            <div className="w-full flex justify-center px-4 lg:py-[60px] pb-[32px]">
                <div className="w-full max-w-7xl flex lg:flex-row lg:gap-4 gap-6 flex-col justify-center">

                    <div className="bg-darkPurple text-white flex flex-col justify-between w-full lg:basis-[50%] p-[40px_32px_30px_32px]  lg:p-[60px_0px_60px_60px]  ">
                        <div>
                            <h1 className="md:text-[32px] text-[20px] mb-3">It started with a small idea</h1>
                            <p className="lg:pr-[75px] md:text-[18px] text-[14px] ">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>


                        </div>

                        <div className=" ">

                            <button className="flex  justify-center items-center md:w-[170px] mt-[32px]  h-[56px] w-full bg-newColor/15"><Link href="#">View collection</Link></button>

                        </div>


                    </div>

                    <div className="flex-1 ">
                        <Image
                            src="/Image Block.png"
                            alt="Right Image"
                            width={630}
                            height={478}
                            className="w-full lg:h-[478px]"
                        />
                    </div>

                </div>


            </div>





            {/* Our Service  */}
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 text-darkPurple ">


                <div>
                    <Image
                        src="/left.png"
                        alt="Image"
                        width={720}
                        height={603}
                        className="w-full lg:mb-0 mb-10"

                    />
                </div>

                <div className="flex flex-col justify-between gap-[64px] lg:gap-6 px-4 lg:p-[72px_100px_54px_84px]">

                    <div className="xl:space-y-6 lg:space-y-2 space-y-3  ">
                        <h1 className="xl:text-[24px] text-[20px]">From a studio in London to a global brand with<br />over 400 outlets</h1>

                        <p className="text-textp xl:text-[16px] text-[14px] ">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>

                        <p className="text-textp xl:text-[16px] text-[14px] ">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

                    </div>

                    <div className="w-full flex  items-center lg:mb-0 mb-[38px] ">
                        <button className="flex justify-center items-center md:w-[170px] w-full   h-[56px] text-darkPurple  bg-lightGray"><Link href="#">Get in touch</Link></button>


                    </div>

                </div>





            </div>



            {/* what makes */}
            <div className="w-full flex justify-center px-4 ">
                <div className="w-full  max-w-7xl text-darkPurple pt-[60px] pb-[80px]">

                    <h1 className="sm:text-center text-left text-[24px] mb-[51px]">What makes our brand different</h1>

                    <div className="grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 lg:gap-[22px] gap-[26px]">
                        <div className="flex items-center justify-between bg-lightGray lg:p-12 p-6 ">
                            <div>

                                <Image
                                    src="/Delivery.svg"
                                    alt="Delivery"
                                    width={24}
                                    height={24}
                                    className="mb-4"

                                />

                                <h3 className="mb-2 text-[20px]">Next day as standard</h3>
                                <h3 className="">Order before 3pm and get your order the next day as standard</h3>
                            </div>
                        </div>


                        <div className="flex items-center justify-between bg-lightGray lg:p-12 p-6 ">
                            <div>

                                <Image
                                    src="/Checkmark--outline.svg"
                                    alt="Delivery"
                                    width={24}
                                    height={24}
                                    className="mb-4"

                                />

                                <h3 className="mb-2 text-[20px]">Made by true artisans</h3>
                                <h3 className="">Handmade crafted goods made with
                                    real passion and craftmanship</h3>
                            </div>
                        </div>

                        <div className="flex items-center justify-between bg-lightGray lg:p-12 p-6 ">


                            <div>

                                <Image
                                    src="/Purchase.svg"
                                    alt="Delivery"
                                    width={24}
                                    height={24}
                                    className="mb-4"

                                />

                                <h3 className="mb-2 text-[20px]">Unbeatable prices</h3>
                                <h3 className="">For our materials and quality you won’t find better prices anywhere</h3>
                            </div>
                        </div>


                        <div className="flex items-center justify-between bg-lightGray lg:p-12 p-6 ">
                            <div>

                                <Image
                                    src="/Sprout.svg"
                                    alt="Delivery"
                                    width={24}
                                    height={24}
                                    className="mb-4"

                                />

                                <h3 className="mb-2 text-[20px]">Recycled packaging</h3>
                                <h3 className="">We use 100% recycled packaging to ensure our footprint is manageable</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* Join the club and get the benefits section start */}
            <div className="w-full flex justify-center px-4  pt-[52px] pb-[65px] bg-lightGray">

                <div className="w-full max-w-7xl text-darkPurple bg-white pt-[52px] pb-[65px] px-4  ">

                    <div className="sm:text-center text-left ">
                        <h1 className="text-[36px]">Join the club and get the benefits</h1>
                        <p>Sign up for our newsletter and receive exclusive offers on new</p>
                        <p>oranges, sales, pop up stores and more</p>
                    </div>




                    {/* field start */}
                    <div className="flex justify-center mt-[72px] ">

                        <form action="" className="flex  w-full max-w-[472px] h-[58px]">
                            <input
                                type="text"
                                id="input-field"
                                placeholder="your@email.com"
                                className="px-4 py-2 border-none outline-none w-full text-[16px] text-darkPurple bg-lightGray"
                            />
                            <button className="text-white w-[118px]  bg-darkPurple h-[58px] flex justify-center items-center">Sign up</button>
                        </form>
                    </div>

                    {/* field end */}




                    <div />

                </div>


                {/* Join the club and get the benefits section end */}
            </div>
            {/* Join the club and get the benefits section end */}




        </div>
    )
}

export default About
