import "./index.css"
import { BsTrash } from "react-icons/bs"
import { IoBagCheckOutline } from "react-icons/io5"
// import {FiHeart} from "react-icons/fi"
// import {CgShoppingBag} from "react-icons/cg"
// import { Link } from "react-router-dom"

const ShoppingCart = () => {
    return (
        <div className="w-full h-full flex flex-col gap-2">

            {/* <div className="w-full h-[6.5rem] flex flex-row justify-between">
                <div className="w-[20%] h-[90%] ml-[6rem] mt-2">
                    <Link to="/products"><button className='w-auto h-full'><img className="w-auto h-full" alt="" src="pics/logo2.png"/></button></Link>
                </div>

                <div className="h-full flex justify-center items-center text-[#035972] font-[AmazonLight] text-[22px]">
                    <p>Coctail dresses midi length womens dresses evening party formal</p>
                </div>

                <div className="w-[20%] h-full flex flex-row justify-center items-center gap-[1.5rem] font-[AmazonLight]">
                    <div className="flex flex-col justify-center items-center text-[#035972]">
                        <button className="text-[26px]"><><FiHeart/></></button>
                        <p className="text-[16px]">Favorites</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-[#035972]">
                        <button className="text-[26px]"><><CgShoppingBag/></></button>
                        <p className="text-[16px]">Shopping Cart</p>
                    </div>
                </div>
            </div> */}


            <div className="w-full h-full bg-[#EDEDED] flex flex-row p-[1rem] gap-[1rem]">

            <div className="w-full max-h-[76vh] flex flex-col bg-white rounded-[1rem] p-[1.5rem]">
                <p className="font-[AmazonLight] text-[30px] mb-1">Your Shopping Cart</p>

                <div className="shopCart w-full overflow-auto">
                    <div className="w-full  bg-white flex flex-col">
                        <hr />

                        <div className="w-full h-[15rem] p-[.8rem] flex flex-row">
                            <div className="w-[20%] flex justify-center items-center">
                                <img alt="" className="w-auto h-full" src="pics/GUBERRY.png" />
                            </div>

                            <div className="w-full flex flex-col justify-between gap-1 font-[AmazonLight]">
                                <div>
                                    <p className="text-[22px] mb-3">GUBERRY Womens Wrap V Neck Long Sleeve Velvet Bodycon Ruched Cocktail Party Dress</p>
                                </div>

                                <div className=" flex flex-col">
                                    <div className="flex flex-col gap-2">
                                        <p><span className="text-[16px] font-bold">Color: </span> <span className="font-[Amazon] text-[15px]">Green</span></p>
                                        <p><span className="text-[16px] font-bold">Size: </span> <span className="font-[Amazon] text-[15px]">Large</span></p>
                                        <div className="flex flex-row gap-1">
                                            <p className="text-[17px] font-bold">Qty:</p>
                                            <select className="w-[45px] h-[30px] p-1 text-[15px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full flex flex-row justify-between mt-[1rem]">
                                    <p className="text-[24px] text-red-500">$<span>58.25</span></p>
                                    <button className="text-[15px] text-[#A1A1A1] flex justify-center items-center gap-1"><><BsTrash /></>Remove</button>
                                </div>

                            </div>
                        </div>

                        <hr />

                    </div>

                    <div className="w-full  bg-white flex flex-col">
                        <hr />

                        <div className="w-full h-[15rem] p-[.8rem] flex flex-row">
                            <div className="w-[20%] flex justify-center items-center">
                                <img alt="" className="w-auto h-full" src="pics/KORMEI.png" />
                            </div>

                            <div className="w-full flex flex-col justify-between gap-1 font-[AmazonLight]">
                                <div>
                                    <p className="text-[22px] mb-3">KORMEI Womens Short Sleeve Floral High Low V-Neck Flowy Party Long Maxi Dress</p>
                                </div>

                                <div className=" flex flex-col">
                                    <div className="flex flex-col gap-2">
                                        <p><span className="text-[16px] font-bold">Color: </span> <span className="font-[Amazon] text-[15px]">Black</span></p>
                                        <p><span className="text-[16px] font-bold">Size: </span> <span className="font-[Amazon] text-[15px]">X-Large</span></p>
                                        <div className="flex flex-row gap-1">
                                            <p className="text-[17px] font-bold">Qty:</p>
                                            <select className="w-[45px] h-[30px] p-1 text-[15px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full flex flex-row justify-between mt-[1rem]">
                                    <p className="text-[24px] text-red-500">$<span>34.99</span></p>
                                    <button className="text-[15px] text-[#A1A1A1] flex justify-center items-center gap-1"><><BsTrash /></>Remove</button>
                                </div>

                            </div>
                        </div>

                        <hr />

                    </div>

                    <div className="w-full  bg-white flex flex-col">
                        <hr />

                        <div className="w-full h-[15rem] p-[.8rem] flex flex-row">
                            <div className="w-[20%] flex justify-center items-center">
                                <img alt="" className="w-auto h-full" src="pics/KORMEI.png" />
                            </div>

                            <div className="w-full flex flex-col justify-between gap-1 font-[AmazonLight]">
                                <div>
                                    <p className="text-[22px] mb-3">KORMEI Womens Short Sleeve Floral High Low V-Neck Flowy Party Long Maxi Dress</p>
                                </div>

                                <div className=" flex flex-col">
                                    <div className="flex flex-col gap-2">
                                        <p><span className="text-[16px] font-bold">Color: </span> <span className="font-[Amazon] text-[15px]">Black</span></p>
                                        <p><span className="text-[16px] font-bold">Size: </span> <span className="font-[Amazon] text-[15px]">X-Large</span></p>
                                        <div className="flex flex-row gap-1">
                                            <p className="text-[17px] font-bold">Qty:</p>
                                            <select className="w-[45px] h-[30px] p-1 text-[15px] text-[#545460] border-[1px] border-solid border-[#8C8D8C] rounded-[.5rem] cursor-pointer outline-none hover:bg-[#EBEBEB]">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full flex flex-row justify-between mt-[1rem]">
                                    <p className="text-[24px] text-red-500">$<span>34.99</span></p>
                                    <button className="text-[15px] text-[#A1A1A1] flex justify-center items-center gap-1"><><BsTrash /></>Remove</button>
                                </div>

                            </div>
                        </div>

                        <hr />

                    </div>
                </div>
            </div>

            <div className="w-[440px] h-[265px] bg-white rounded-[1rem] flex flex-col p-[1.5rem] gap-[.8rem] font-[AmazonLight]">

                <div className="w-full flex flex-col gap-[.8rem] pl-[.5rem] pr-[.5rem] text-[18px]">
                    <div className="w-full flex flex-rou justify-between items-center">
                        <p className="font-bold">Subtotal:</p>
                        <p>$<span>186.24</span></p>
                    </div>
                    <div className="w-full flex flex-rou justify-between items-center">
                        <p className="font-bold">Packing:</p>
                        <p>$<span>14</span></p>
                    </div>
                    <div className="w-full flex flex-rou justify-between items-center">
                        <p className="font-bold">Sales Tax:</p>
                        <p>$<span>8</span></p>
                    </div>
                </div>

                <hr />

                <div className="w-full flex flex-rou justify-between items-center pl-[.5rem] pr-[.5rem] text-[20px] font-bold">
                    <p>Total:</p>
                    <p className="text-red-500">$<span>245.03</span></p>
                </div>

                <div className="w-full flex justify-center items-center ">
                    <button className="w-full h-[50px] flex justify-center items-center gap-3 pl-[.5rem] pr-[.5rem] bg-[#035972] rounded-[.5rem] text-white font-[AmazonLight] text-[22px]">
                        <><IoBagCheckOutline className="text-[26px] font-bold mb-2" /></>
                        Begin Checkout
                    </button>
                </div>
            </div>

        </div>

        </div>
    )
}

export default ShoppingCart