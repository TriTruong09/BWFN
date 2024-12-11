import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import AdminOrderDetailsView from "./order-details";


function AdminOrdersView() {

    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

    return ( 
    <Card>
        <CardHeader>
            <CardTitle>Đơn hàng</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Mã đơn hàng</TableHead>
                        <TableHead>Ngày đặt hàng</TableHead>
                        <TableHead>Trạng thái đơn hàng</TableHead>
                        <TableHead>Giá</TableHead>
                        <TableHead>
                            <span className="sr-only">Chi tiết</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>34527279</TableCell>
                        <TableCell>12/11/2024</TableCell>
                        <TableCell>Đang vận chuyển</TableCell>
                        <TableCell>10 củ</TableCell>
                        <TableCell>
                            <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                            <Button onClick={()=>setOpenDetailsDialog(true)}>
                                Xem chi tiết đơn hàng
                            </Button>
                            <AdminOrderDetailsView/>
                            </Dialog>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>

     );
}

export default AdminOrdersView;