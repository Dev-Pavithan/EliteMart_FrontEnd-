import InnerBanner from '../Components/InnerBanner/InnerBanner';

const ContactUs = () => {

  return (
    <>
        <InnerBanner/>

        <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345086165!2d144.95373561590417!3d-37.81627974202108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0f8d7fd%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1639726931296!5m2!1sen!2sau"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <h2 className="text-center">Contact Us</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"/>
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"/>
            </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Write your message here"
          ></textarea>
        </div>

        <div className="d-grid">
        </div>
      </form>
    </div>

  </div>
</div>
    </>
  );
};

export default ContactUs;