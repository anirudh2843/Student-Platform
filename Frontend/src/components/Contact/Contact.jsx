import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-section"></div>
      <div className="contact_lower">
        <div className="heading">
          <div>
            Contact <span> Me</span>
          </div>
        </div>
        <form>
          <div class="input_wrap1">
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              required
              autocomplete="off"
            />
            <input
              type="email"
              placeholder="Your email"
              name="Email"
              required
              autocomplete="off"
            />
          </div>

          <div class="input_wrap2">
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              required
              autocomplete="off"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              autocomplete="off"
              minlength="5"
            ></textarea>
          </div>
          <button class="sign_in" type="submit ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
