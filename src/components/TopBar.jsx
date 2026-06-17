import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const TopBar = () => {

return (
<div className="bg-[#111] text-gray-300 text-xs py-2 px-6 hidden md:flex justify-end gap-6 z-50 relative border-b border-gray-800"> 
<span className="flex items-center gap-2" > <CiMobile4 />+88 01624555544</span>
<span className="flex items-center gap-2"><CiMail />info@aan-nahl.com</span>


</div>
)

}

export default TopBar;







