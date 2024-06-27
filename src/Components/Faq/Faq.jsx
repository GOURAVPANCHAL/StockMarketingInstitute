import React from "react";
import "../Faq/faq.css";

const Faq = () => {
  return (
    <>
      <div className="container mb-5">
        <h1 className="allheading mb-3">Frequently Asked Question (FAQ)</h1>
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
                    What are the eligibility criteria to apply for any of your
                    courses?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Minimum qualification should be 10th pass.  You can directly
                    take admission in these courses after matriculation.
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
                    Does this course help me in making my career?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes, this course can significantly boost your career
                    prospects in the financial market industry, including
                    sectors like banking, insurance, broking houses, research
                    houses, financial institutions, and investment banking.
                    Potential roles include terminal operator/dealer,
                    relationship executive or manager, RMS executive or manager,
                    depository department executive or manager, back office
                    executive or manager, technical and fundamental analyst,
                    research analyst, or assistant to a research analyst.
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
                    How can I benefit from this course?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our courses can help you build a career in broking houses,
                    financial institutions, or as a sub-broker, investor, or
                    trader. The skills you learn will open various career
                    opportunities in the financial market.
                  </div>
                </div>
              </div>

              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEleven"
                    aria-expanded="false"
                    aria-controls="flush-collapseEleven"
                  >
                    What is the refund policy?
                  </button>
                </h2>
                <div
                  id="flush-collapseEleven"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  We have a transparent refund policy. If you decide to withdraw from the course within the first week of enrolment, you are eligible for a full refund. After this period, refunds are not available, but you may be able to defer your enrolment to a later date.
                  </div>
                </div>
              </div>

              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwelve"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwelve"
                  >
                    Can I get a demo of the course before enrolling?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwelve"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Yes, we offer a demo session for prospective students. This session provides an overview of the course structure, teaching methods, and the virtual trading platform. Contact us to schedule your demo session.
                  </div>
                </div>
              </div>

              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThirteen"
                    aria-expanded="false"
                    aria-controls="flush-collapseThirteen"
                  >
                    Is there any community or network for alumni?
                  </button>
                </h2>
                <div
                  id="flush-collapseThirteen"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Yes, we have a vibrant alumni network where you can connect with fellow graduates, share experiences, and seek advice. This network provides on-going support and opportunities for professional growth even after course completion.
                  </div>
                </div>
              </div>

              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFourteen"
                    aria-expanded="false"
                    aria-controls="flush-collapseFourteen"
                  >
                    How often are new courses introduced?
                  </button>
                </h2>
                <div
                  id="flush-collapseFourteen"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  We regularly update our curriculum and introduce new courses to keep pace with the evolving financial market landscape. Stay tuned to our website or subscribe to our newsletter for the latest updates on new courses.
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
                    How are the courses delivered?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our courses are delivered through a combination of online
                    classes, live virtual sessions, and practical trading
                    exercises using virtual software. This hybrid approach
                    ensures you gain both theoretical knowledge and practical
                    experience.
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
                    Can I switch to a different course after enrolment?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes, you can switch to a different course after enrolment,
                    subject to the availability of seats and the fulfilment of
                    any prerequisites for the new course. Contact our
                    administration for more details on the process.
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
                    What is the duration of your courses?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    The duration of our courses varies. We offer short-term
                    crash courses that last a few weeks, as well as
                    comprehensive year-long programs. You can choose a course
                    that best fits your schedule and learning needs.
                  </div>
                </div>
              </div>

              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Do you provide any certification upon course completion?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes, upon successful completion of the course, you will
                    receive a certification from TSE Institute. This
                    certification can add value to your resume and help in your
                    career advancement in the financial sector.{" "}
                  </div>
                </div>
              </div>

              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    What kind of support do you offer to students during the
                    course?
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We offer continuous support to our students through live Q&A
                    sessions, discussion forums, and one-on-one mentoring
                    sessions with experienced instructors. Our goal is to ensure
                    you have all the resources you need to succeed.
                  </div>
                </div>
              </div>


              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseNine"
                    aria-expanded="false"
                    aria-controls="flush-collapseNine"
                  >
                    Are there any additional costs beyond the course fee?
                  </button>
                </h2>
                <div
                  id="flush-collapseNine"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  All necessary materials and access to virtual trading software are included in the course fee. However, there might be additional costs for optional resources or specialized workshops, which will be communicated in advance.
                  </div>
                </div>
              </div>


              <div class="accordion-item mb-1">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFifteen"
                    aria-expanded="false"
                    aria-controls="flush-collapseFifteen"
                  >
                    How can I pay for the courses?
                  </button>
                </h2>
                <div
                  id="flush-collapseFifteen"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  We accept various payment methods, including Cash, net banking, and UPI. You can choose the payment method that is most convenient for you during the enrolment process.
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
