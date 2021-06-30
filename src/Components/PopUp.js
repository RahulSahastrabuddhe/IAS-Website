import React from "react";

export default function PopUp(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();

  const handleClick = () => {
    props.toggle();
   };
  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "IAS Membership",
                amount: {
                  currency_code: "USD",
                  value: 5.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
        //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div className="popup">
    <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={handleClick}>&times;    </span>
     <h3>Become A Member</h3>
     <h4>Total Amount in USD: $10</h4>
      <div ref={paypalRef} />
       </div>
       </div>
     </div>
   
  );
}

