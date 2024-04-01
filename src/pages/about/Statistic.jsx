import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// Functional component for displaying statistics with CountUp animations
const Statistic = () => {
  // State to control the start and stop of CountUp animations
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      {/* Apply ScrollTrigger to initiate CountUp animations on scroll */}
      <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>

        {/* Statistics section with flex layout */}
        <section className="text-gray-600 body-font" style={{ backgroundColor: "#DFE4EA" }}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              {/* Statistic block for Users */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={2700} duration={1} delay={0} />}
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              {/* Statistic block for Subscribes */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={10} duration={2} delay={0} />}
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>

              {/* Statistic block for Downloads */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={35} duration={2} delay={0} />}
                </h2>
                <p className="leading-relaxed">Active users</p>
              </div>

              {/* Statistic block for Products */}
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {/* Conditionally render CountUp component when counterStart is true */}
                  {counterStart && <CountUp start={0} end={5} duration={2} delay={0} />}
                </h2>
                <p className="leading-relaxed">Fetures</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

// Export the Statistic component for use in other parts of the application
export default Statistic;