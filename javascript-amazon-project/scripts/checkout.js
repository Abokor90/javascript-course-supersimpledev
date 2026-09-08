import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/car.js';
// import '../data/backend-practice.js';
import { loadProduct } from "../data/products.js";

loadProduct(() => {
  renderOrderSummary();
  renderPaymentSummary();
})


