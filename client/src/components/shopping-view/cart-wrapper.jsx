import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";


function UserCartWrapper() {
    return ( <SheetContent className="sm:max-w-md">
        <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">

        </div>
        <div className="mt-8 space-y-4">
            <div className="flex justify-between">
                <span className="font-bold">Tổng tiền </span>
                <span className="font-bold">1.000.000Đ</span>
            </div>
        </div>
        <Button className="w-full mt-6">Thanh toán</Button>
    </SheetContent>
        
     );
}

export default UserCartWrapper;