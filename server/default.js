
import {products} from "./constant/data.js";
import Product from "./model/product-schema.js";


const DefaultData = async() =>{
 try {
    await Product.deleteMany({});
    await Product.insertMany(products);
     console.log('Data imported Succesfully');
 } catch (error) {
    console.log('Error while inserting default data', error.message);
 }
}
export default DefaultData;