import { BsGridFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
/>;

const Navbar = () => {
  return (
    <>
      <div className="top-0 left-0 h-[100%] w-64 bg-[#026670] absolute">
        <div>
          <div className="h-12 text-center p-2 text-black font-bold text-xl  bg-gradient-to-b from-transparent to-[#edeae5] bg-gradient-to-l from-transparent to-[#edeae5]">
            Insu@Tech
          </div>
        </div>
        <div>
          <ul className="[&>li]:pt-2 [&>li]:relative  [&>li]:mt-4 [&>li]:pb-2 [&>li]:flex [&>li]:items-center [&>li]:justify-between  [&>li>div]:pr-4 [&>li>div]:pt-1 [&>li>a]:flex [&>li>a]:items-center   [&>li>a]:space-x-6 text-white">
            <li className="hover:bg-[#2b2a27] transition duration-75 ease-in-out">
              <a href="">
                <BsGridFill />
                <span>Dashboard</span>
              </a>
            </li>

            <li className="hover:bg-[#2b2a27] transition duration-75 ease-in-out">
              <a href="">
                <BsGridFill />
                <span>Insurance Products</span>
              </a>
              <div>
                <FaChevronDown />
              </div>
              <ul className="mt-1 bg-[#03a0af] opacity-60  [&>li]:whitespace-nowrap">
                <li className="text-[16px] font-bold cursor-pointer opacity-100">
                  Insurance Products
                </li>
                <li className="cursor-pointer hover:text-black">
                  Term Insurance
                </li>
                <li className="cursor-pointer hover:text-black">
                  Investment Plans
                </li>
                <li className="cursor-pointer hover:text-black">
                  Health Insurance
                </li>
                <li className="cursor-pointer hover:text-black">
                  Car Insurance
                </li>
              </ul>
            </li>

            <li className="hover:bg-[#2b2a27] transition duration-75 ease-in-out">
              <a href="">
                <BsGridFill />
                <span>Claims</span>
              </a>
              <div>
                <FaChevronDown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
