import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

export default function PopUp(props) {
  const [paid, setPaid] = React.useState(false);
  const [error] = React.useState(null);
  const paypalRef = React.useRef();
  // let dynamicClassName = "false";
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [netId, setNetId] = React.useState("");

  const orderDetails = {
    name: name,
    email: email,
    netId: netId,
  };

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
                  value: 10.0,
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
    toast("Payment Successfull. We will contact you soon:)");
    console.log(orderDetails);
    emailjs
      .send(
        "service_wb10qzj",
        "template_macz4el",
        orderDetails,
        "user_EbsHvfEErVslPnqCBOmiN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    return null;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div className="popup">
      <ToastContainer />
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={handleClick}>
            &times;{" "}
          </span>
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
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="contactName">
              NetID <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="netId"
              name="netId"
              onChange={(e) => setNetId(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="contactEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              size="35"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* className={
                dynamicClassName === "true" ? "enabledBtn " : "disableBtn"
              } */}
          <div ref={paypalRef}></div>
        </div>
      </div>
    </div>
  );
}
