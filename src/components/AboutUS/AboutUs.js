import "./AboutUs.css";

function AboutUs() {
  return (
    <div class="d-flex  flex-column about-us-div">
      <div class="d-flex  justify-content-center">
        <h2 className="head-about-us  ">About Us</h2>
      </div>

      <div className=" ">
        <p className="d-flex  justify-content-center text-opicety d-block">
          <i>We Care About You</i>
        </p>
      </div>

      <div className=" d-flex  justify-content-center ">
        <p class="col-6 about-us-content">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
