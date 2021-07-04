import React from "react";

export default function PopUp(props) {
  const [paid, setPaid] = React.useState(false);
  const [error] = React.useState(null);
  const paypalRef = React.useRef();
  let dynamicClassName= "false";
  let name = "";
  let email = "";
  const handleClick = () => {
    props.toggle();
   };

   const handleNameChange = (e) => {
    
     name = e;

    //  if(e == "")
    //  {
    //   dynamicClassName = "false";
    //  }
    //  else
    //  {
    //   dynamicClassName = "true";
    //  }
   };

   const handleEmailChange = (e) => {
   
    email = e;
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
    console.log(name);
    console.log(email);
    return <div>{name} Payment successfulhhhkkhk.!</div>;

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
     
     <div>
       
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="payerName"
                      name="payerName"
                      onChange={event => handleNameChange(event.target.value)}
                    required/>
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="payerMail"
                      name="payerName"
                      onChange={event => handleEmailChange(event.target.value)}
                    required/>
                  </div>
      <div className={dynamicClassName === "true"? "enabledBtn " : "disableBtn"} ref={paypalRef} />
       </div>
       </div>
     </div>
   
  );
}

