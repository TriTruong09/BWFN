import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const initialFormData = {
    status: "",
  };


function AdminOrderDetailsView() {
    const [formData, setFormData] = useState(initialFormData);

    function handleUpdateStatus(event){
        event.preventDefault();
    }

    return ( 
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-6 items-center justify-between">
                    <p className="font-medium">Mã đơn hàng</p>
                    <Label>123356</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Ngày đặt hàng</p>
                    <Label>11/12/2024</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Giá</p>
                    <Label>10 củ</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Trạng thái đơn hàng</p>
                    <Label>Đang xử lí</Label>
                    </div>
                </div>
                <Separator/>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Chi tiết đơn hàng</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span>Sản phẩm 1</span>
                                <span>4 củ</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-4">
                <div className="grid gap-2">
                <div className="font-medium">Thông tin vận chuyển</div>
                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>TriTruong</span>
                            <span>Địa chỉ</span>
                            <span>Thành phố</span>
                            <span>Mã pin</span>
                            <span>Số điện thoại</span>
                            <span>Ghi chú</span>
                        </div>
                    </div>
                </div>

                <div>
                    <CommonForm
                    formControls={[
                        {
                            label: "Trạng thái đơn hàng",
                            name: "status",
                            componentType: "select",
                            options: [
                              { id: "pending", label: "Đang chờ xử lí" },
                              { id: "inProcess", label: "Đang trong quá trình xử lí" },
                              { id: "inShipping", label: "Đang vận chuyển" },
                              { id: "delivered", label: "Đã giao hàng" },
                              { id: "rejected", label: "Đã từ chối" },
                            ],
                        }
                    ]}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={"Cập nhật trạng thái đơn hàng"}
                    onSubmit={handleUpdateStatus}
                    />
                </div>
            </div>
        </DialogContent>
     );
}

export default AdminOrderDetailsView;