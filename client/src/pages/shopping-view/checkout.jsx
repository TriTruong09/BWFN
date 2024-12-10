import img from "../../assets/banner-6.jpg";

import Address from "@/components/shopping-view/address";

function ShoppingCheckout() {
    return ( 
    <div className="flex flex-col">
            <div className="relative h-[300px] w-full overflow-hidden">
                //<img src={img} className="h-full w-full object-cover object-center" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
                <Address />
            </div>
    </div> 
     );
}

export default ShoppingCheckout;