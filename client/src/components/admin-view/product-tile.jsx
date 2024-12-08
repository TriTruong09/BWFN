import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

// Hàm định dạng tiền tệ
const formatCurrency = (amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "N/A"; // Giá trị mặc định nếu không hợp lệ
  }
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  // Chuyển đổi `price` và `salePrice` sang số nếu cần
  const price = Number(product?.price || 0);
  const salePrice = Number(product?.salePrice || 0);

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title || "Product image"}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              {formatCurrency(price)}
            </span>
            {salePrice > 0 ? (
              <span className="text-lg font-bold">{formatCurrency(salePrice)}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
