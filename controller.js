import mongoose from "mongoose";
const { Schema, model } = mongoose;


const customerSchema = new Schema({
  name: { type: String }
});


const customer = model('customer', customerSchema);
export default customer;




/* // Display list of all customers.
exports.customer_list = asyncHandler(async (req, res, next) => {
    const allcustomers = await customer.find({}, "title author")
      .sort({ title: 1 })
      .populate("author")
      .exec();
  
    res.render("customer_list", { title: "customer List", customer_list: allcustomers });
  });
   */