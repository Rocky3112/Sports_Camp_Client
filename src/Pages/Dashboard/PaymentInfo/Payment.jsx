import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelect from "../../../Hooks/useSelect";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [select] = useSelect();
    const total = select.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            
            <Elements stripe={stripePromise}>
                <CheckoutForm select={select} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
