import React, { useRef, useState } from "react";
import "./Contact.css";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation logic
    if (!name || name.length < 2) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    // Add email validation using regex
    const emailRegex =
      /^(?=.{6,320}$)(?!.*@.*@)(?=.{1,64}@)(?=.{1,255}\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!message || message.split(" ").length < 5) {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    // Disable the button while sending the email
    setButtonDisabled(true);

    emailjs
      .sendForm(
        "service_8iwbaw6",
        "template_5xych8l",
        form.current,
        "LzOh04q1visUZVqSU"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setTimeout(() => {
              toast.success("I will respond as soon as possible!", {
                style: {
                  fontSize: "20px",
                  padding: "20px",
                },
                autoClose: 10000,
              });
            }, 3000);
            toast.success("Thank you for your message!", {
              style: {
                fontSize: "20px",
                padding: "20px",
              },
              autoClose: 7000,
            });

            setName("");
            setEmail("");
            setMessage("");
          }
        },
        (error) => {
          toast.error("Error sending message");
          console.log(error.text);
        }
      )
      .finally(() => {
        // Enable the button after email is sent
        setButtonDisabled(false);
      });
  };

  return (
    <div className="my-10">
      <div className="w-full bg-transparent flex justify-center items-center mt-42">
        <div className="relative inline-flex group my-5">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Contact Now
          </a>
        </div>
      </div>
      <div
        id="contact"
        className=" py-16 rounded-xl contact-bg text-white overflow-hidden"
      >
        {/* emoji */}

        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white  p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold animate-gradient mb-6 animate__animated animate__fadeInUp">
              I would <span className="gradient-text">love</span> to{" "}
              <span className="gradient-text">hear</span> from{" "}
              <span className="gradient-text">
                you{" "}
                <img
                  className="inline w-14 rounded-full animate-bounce"
                  src="https://static.vecteezy.com/system/resources/previews/028/177/792/original/cute-happy-emoji-kawaii-emoticon-doodle-outline-png.png"
                  alt=""
                />
              </span>
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
                    nameError ? "border-red-500" : ""
                  }`}
                />
                {nameError && (
                  <p className="text-red-500 text-sm">
                    Name must be at least 2 characters long
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
                    emailError ? "border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">
                    Enter a valid email address
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
                    messageError ? "border-red-500" : ""
                  }`}
                ></textarea>
                {messageError && (
                  <p className="text-red-500 text-sm">
                    Message must be at least 5 words long
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`border-2 w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-white py-3 px-6 rounded-md transition-all duration-300 hover:opacity-80 ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isButtonDisabled}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact;
