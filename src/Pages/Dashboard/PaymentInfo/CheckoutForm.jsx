/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import  { AuthContext } from "../../../Providers/AuthProvider";
import useAxios from "../../../Hooks/useAxios";


const CheckoutForm = ({ select, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxios()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  // console.log(res.data.clientSecret)
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure])


  const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
          return
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
          return
      }

      const { error } = await stripe.createPaymentMethod({
          type: 'card',
          card
      })

      if (error) {
          console.log('error', error)
          setCardError(error.message);
      }
      else {
          setCardError('');
          // console.log('payment method', paymentMethod)
      }

      setProcessing(true)

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      email: user?.email || 'unknown',
                      name: user?.displayName || 'anonymous'
                  },
              },
          },
      );

      if (confirmError) {
          console.log(confirmError);
      }

      console.log('payment intent', paymentIntent)
      setProcessing(false)
      if (paymentIntent.status === 'succeeded') {
          setTransactionId(paymentIntent.id);
          // save payment information to the server
          const payment = {
              email: user?.email,
              transactionId: paymentIntent.id,
              price,
              date: new Date(),
              quantity: select.length,
              selectClass: select.map(item => item._id),
              menuItems: select.map(item => item.menuItemId),
              status: 'service pending',
              itemNames: select.map(item => item.name)
          }
          axiosSecure.post('/payments', payment)
              .then(res => {
                  console.log(res.data);
                //   if (res.data.result.insertedId) {
                //       // display confirm
                //   }
              })
      }


  }

  return (
      <>
          <form className="w-2/3 m-8 bg-slate-100 shadow-slate-300 shadow-xl p-8" onSubmit={handleSubmit}>

            <h2 className=" text-2xl font-semibold py-4">
                total: {price}
            </h2>
              <CardElement
                  options={{
                      style: {
                          base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                  color: '#aab7c4',
                              },
                          },
                          invalid: {
                              color: '#9e2146',
                          },
                      },
                  }}
              ></CardElement>
              <button className="btn btn-primary btn-md mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                  Pay
              </button>
          </form>
          {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
          {transactionId && <p className="text-green-500 border-2">Transaction complete with transactionId: {transactionId}</p>}
      </>
  );
};

export default CheckoutForm;