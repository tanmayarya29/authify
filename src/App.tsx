import React from 'react';
import ProductDialog from './components/productDialog/ProductDialog';
import ProductCard, { Product } from './components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from './features/productSlice';

// const dummyData:Product = {
//   name:"Lux Cozi",
//   image:"",
//   price:45
// }

const dummyData: Product[] = [
  { name: 'Product 1', 
  image: 'image-url-1',
   price: 19.99,
   description: 'most ccomfortable product',
  category: 'innerware',
  quantity: 2,
  rating: 5,
  reviews: ["good product"],
 },

  { name: 'Product 2',
   image: 'image-url-2', 
   price: 29.99,
   description: 'most ccomfortable product',
  category: 'innerware',
  quantity: 2,
  rating: 5,
  reviews: ["good product"],
   }
];



const App: React.FC = () => {
  const storeData = useSelector((state:any)=>state.product);
  console.log(storeData);
  const dispatch = useDispatch();

  return (
    <div>

      <h1
         onClick={()=>dispatch(handleChange({...dummyData[0]}))}
      >Product Management</h1>

      
      <ProductDialog />
      {dummyData.map(item=><ProductCard {...item}/>)}
    </div>
  );
};

export default App;
