import React from "react";

const AFoot = (props) => {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
      <br></br>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contatti</h6>
              <p>
                <i class="fas fa-home me-3"></i> Palermo, PA 90010, ITALIA
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                letsgosharingbyalpakas@gmail.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 39 348 319 4800
              </p>
              <p>
                <i class="fas fa-print me-3"></i> + 39 327 582 4876
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4">
        <h1 class="text-reset fw-bold">Let's GO</h1>
      </div>
    </footer>
  );
};
export default AFoot;
