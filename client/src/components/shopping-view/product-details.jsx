import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../ui/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";

function ProductDetailsDialog({ open, setOpen, productDetails }) {

    const dispatch = useDispatch() ;
    const {user} = useSelector(state=>state.auth);
    const {toast} = useToast();

    function handleAddtoCart(getCurrentProductId, getTotalStock) {
        console.log(getCurrentProductId, getTotalStock);
        dispatch(addToCart({
          userId : user.id, 
          productId: getCurrentProductId, 
          quantity: 1,
        })
        ).then(data=> {
          dispatch(fetchCartItems(user?.id));
          toast({
            title: "Đã thêm vào giỏ hàng",
          });
        });
      }

    
    const descriptionItems = productDetails?.description?.split(" - ") || [];

    function handleDialogClose(){
        setOpen(false);
        dispatch(setProductDetails());
    }

    return (
        <Dialog open={open} onOpenChange={handleDialogClose}>
            <DialogContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
                {/* Hình ảnh sản phẩm */}
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={productDetails?.image}
                        alt={productDetails?.title}
                        width={600}
                        height={600}
                        className="aspect-square w-full object-cover"
                    />
                </div>

                {/* Thông tin sản phẩm */}
                <div className="flex flex-col justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold">{productDetails?.title}</h1>
                        {/* Mô tả sản phẩm xuống dòng */}
                        <div className="text-muted-foreground mt-2 space-y-2">
                            {descriptionItems.map((item, index) => (
                                <p key={index}>- {item.trim()}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p
                            className={`text-3xl font-bold text-primary ${productDetails?.salePrice > 0 ? "line-through" : ""
                                }`}
                        >
                            {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(productDetails?.price)}
                        </p>
                        {productDetails?.salePrice > 0 && (
                            <p className="text-2xl font-bold text-muted-foreground">
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productDetails?.salePrice)}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-0.5">
                            <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                            <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                        </div>
                        <span className="text-muted-foreground">(4.5)</span>
                    </div>
                    <div className="mt-5">
                        <Button className="w-full" conClick={()=>handleAddToCart(productDetails?._id)}>Thêm vào giỏ hàng</Button>
                    </div>
                    <Separator />
                    <div className="max-h-[300px] overflow-auto">
                        <h2 className="text-xl font-bold mb-4">Đánh giá sản phẩm</h2>
                        <div className="grid gap-6">
                            
                            <div className="flex gap-4">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarFallback>
                                        hihi
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold">Tri Truong</h3>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                    </div>
                                    <p className="text-muted-foreground">Toẹt vời</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarFallback>
                                        hihi
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold">Tri Truong</h3>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                        <StarIcon className="w-5 h-5 fill-primary text-yellow-500" />
                                    </div>
                                    <p className="text-muted-foreground">Toẹt vời</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <Input placeholder="Viết đánh giá của bạn" />
                            <Button>Gửi đánh giá</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ProductDetailsDialog;