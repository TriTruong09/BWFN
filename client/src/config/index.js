

export const registerFormControls = [
    {
        name : 'userName',
        label : 'User Name',
        placeholder : 'Enter your user name',
        componentType : 'input',
        type: 'text',
    },

    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type: 'email',
    },

    {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
    },
]

export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];

  export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "racket", label: "Vợt cầu lông" },
        { id: "shoes", label: "Giày" },
        { id: "tshirt", label: "Áo cầu lông" },
        { id: "short", label: "Quần cầu lông" },
        { id: "accessory", label: "Phụ kiện cầu lông" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "yonex", label: "Yonex" },
        { id: "lining", label: "Lining" },
        { id: "mizuno", label: "Mizuno" },
        { id: "victor", label: "Victor" },
        { id: "kamito", label: "Kamito" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];

  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Trang chủ",
      path: "/shop/home",
    },
    {
      id: "products",
      label: "Sản phẩm",
      path: "/shop/listing",
    },
    {
      id: "racket",
      label: "Vợt cầu lông",
      path: "/shop/listing",
    },
    {
      id: "shoes",
      label: "Giày cầu lông",
      path: "/shop/listing",
    },
    {
      id: "tshirt",
      label: "Áo cầu lông",
      path: "/shop/listing",
    },
    {
      id: "short",
      label: "Quần cầu lông",
      path: "/shop/listing",
    },
    {
      id: "accessory",
      label: "Phụ kiện cầu lông",
      path: "/shop/listing",
    },
    {
      id: "search",
      label: "Tìm kiếm",
      path: "/shop/search",
    },
  ];

  export const categoryOptionsMap = {
    racket: "Vợt cầu lông",
    shoes: "Giày cầu lông",
    tshirt: "Áo cầu lông",
    short: "Quần cầu lông",
    accessory: "Phụ kiện cầu lông",
  };

  export const brandOptionsMap = {
    yonex: "Yonex",
    lining: "Lining",
    mizuno: "Mizuno",
    victor: "Victor",
    kamito: "Kamito",
  };

  export const filterOptions = {
    "category": [
      { id: "racket", label: "Vợt cầu lông" },
      { id: "shoes", label: "Giày cầu lông" },
      { id: "tshirt", label: "Áo cầu lông" },
      { id: "short", label: "Quần cầu lông" },
      { id: "accessory", label: "Phụ kiện cầu lông" },
    ],
    "brand": [
      { id: "yonex", label: "Yonex" },
      { id: "lining", label: "Lining" },
      { id: "mizuno", label: "Mizuno" },
      { id: "victor", label: "Victor" },
      { id: "kamito", label: "Kamito" },
    ],
    //add ở đây thêm be 
  };
  
  export const sortOptions = [
    { id: "price-lowtohigh", label: "Giá tăng dần" },
    { id: "price-hightolow", label: "Giá giảm dần" },
    //{ id: "title-atoz", label: "Title: A to Z" },
    //{ id: "title-ztoa", label: "Title: Z to A" },
  ];

  export const addressFormControls = [
    {
      label: "Địa chỉ",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Nhập địa chỉ của bạn",
    },
    {
      label: "Thành phố",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Nhập thành phố của bạn",
    },
    {
      label: "Mã pin",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Nhập mã pin của bạn",
    },
    {
      label: "Số điện thoại",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Nhập số điện thoại của bạn",
    },
    {
      label: "Ghi chú",
      name: "notes",
      componentType: "textarea",
      placeholder: "Nhập ghi chú bổ sung",
    },
  ];

  
  