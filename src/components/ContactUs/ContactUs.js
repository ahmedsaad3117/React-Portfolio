import "./ContactUs.css";

function ContactUs() {
  return (
      <div class="contact-us-contenr">
          <h2 className="d-flex justify-content-center pt-3">Contact</h2>
    <div className="d-flex  pt-3">
      
      <div className="contact-info d-flex flex-column  col-6 align-items-center   ">
        <div className="">
          <div className=""> <i class="fas fa-map-marker-alt"> Chicago, US</i> </div>
          <div className=""><i class="fas fa-phone"> Phone: +00 151515</i></div>
          <div className=""> <i class="fas fa-envelope-square"> Email: mail@mail.com</i>
            
          </div>
        </div>
      </div>
      <form className="col-6">
        <div class="d-flex">
          <div class="mb-3 col-5 m-2">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your Info with anyone else.
            </div>
          </div>
          <div class="mb-3 col-5 m-2">
            <label for="exampleInputEmail1" class="form-label">
              Your Phone Number
            </label>
            <input
              type="email"
              class="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Your opinion is important is us
          </label>
          <textarea
            type="textarea"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
export default ContactUs;
