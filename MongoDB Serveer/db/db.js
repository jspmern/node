const mongoose = require("mongoose")

const main = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/react")
        console.log("DB connected");
    } catch (err) {
        console.log(err);
    }
}
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// })


// const saveData = async () => {
//     const productsModel = mongoose.model("products", productSchema)

//     let data = new productsModel({ name: "Samsung", price: 1000 })

//     let result = await data.save();
//     console.log(result);
// }
// saveData();

// const updateData = async () => {
//     const productModel = mongoose.model("products", productSchema)
//     let data = await productModel.updateOne(
//         { name: "Vicky" },
//         {
//             $set: { name: "i phone" }
//         }
//     )
//     console.log(data);
// }
// updateData()



// const deleteData = async () => {
//     const productModel = mongoose.model("products", productSchema)
//     let data = await productModel.deleteOne({ name: "i phone" })
//     console.log(data);
// }
// deleteData()


// const findData = async () => {
//     const productModel = mongoose.model("products", productSchema)
//     let data = await productModel.findOne({ name: "Apple" })
//     console.log(data);
// }
// findData()



module.exports = main 
