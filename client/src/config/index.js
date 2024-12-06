

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