import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact" id="Contact">
        <h2 className="heading">Contact Me</h2>
        <form action="https://formspree.io/f/mnnaneab" method="POST">
          <div className="input-box">
            <input type="text" name="name:" placeholder="Full Name" required />
            <input
              type="email"
              name="Email:"
              placeholder="Email Address"
              required
            />
          </div>

          <textarea
            className=""
            id=""
            cols="30"
            rows="8"
            name="Message:"
            placeholder="Enter your message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
}
