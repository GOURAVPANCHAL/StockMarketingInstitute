import React from "react";
import '../Faq/faq.css'

const Faq = () => {
  return (
    <>
      <div className="container mb-5">
        <h1 className="allheading mb-3">
            Frequently Asked Question (FAQ)
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Classes will conduct offline or online?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Will you providing recording If i misses the class ?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Can i do my own business after this course ?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Can i get my courses customized
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                   Is trading risky ?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    In which language teacher teach us ?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
