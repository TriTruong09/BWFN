import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle  } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "@/store/admin/products-slice";
import { data } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AdminProductTile from "@/components/admin-view/product-tile";


const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

function AdminProducts() {

    const [openCreateProductDialog, setOpenCreateProductsDialog] = 
      useState (false);
      const [formData,setFormData] = useState(initialFormData);
      const [imageFile,setImageFile] = useState(null);
      const [uploadedImageUrl,setUploadImageUrl] = useState("");
      const [imageLoadingState, setImageLoadingState] = useState(false);
      const { productList } = useSelector((state) => state.adminProducts);
      const dispatch = useDispatch();
      const {toast} = useToast ();

      function onSubmit(event){
        event.preventDefault();
        dispatch(addNewProduct({
          ...formData,
          image: uploadedImageUrl,
        })).then((data)=> {
          if(data?.payload?.success){
            dispatch(fetchAllProducts())
            setOpenCreateProductsDialog(false);
            setImageFile(null);
            setFormData(initialFormData);
            toast({
              title: "Product add successfully",
            });
          }
        })
      }

      useEffect(()=>{
        dispatch(fetchAllProducts());
      },[dispatch])

        console.log(productList, uploadedImageUrl, "productList");

      

    return <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={()=>setOpenCreateProductsDialog(true)}>Add New Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          productList && productList.length > 0 ?
          productList.map(productItem=><AdminProductTile product={productItem}/>) : null
        }
      </div>
      <Sheet 
        open={openCreateProductDialog} 
        onOpenChange={()=>{
          setOpenCreateProductDialog(false);
      }}
      >
        <SheetContent side="right" className="overflow-auto">
        <SheetHeader>
            <SheetTitle>
              Add New Product
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload 
          imageFile ={imageFile} 
          setImageFile ={setImageFile} 
          uploadedImageUrl={uploadedImageUrl} 
          setUploadImageUrl={setUploadImageUrl} 
          setImageLoadingState ={setImageLoadingState}
          imageLoadingState ={imageLoadingState}
          />
          <div className="py-6">
            <CommonForm onSubmit={onSubmit} formData={formData} setFormData={setFormData} buttonText='Add'
            formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  }
  
  export default AdminProducts;