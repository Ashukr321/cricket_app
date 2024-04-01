import React from 'react';
import './About.css';
import CompanyGrid from './CompanyGrid';

const About = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl py-20">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center animated-image">
            <img src="https://cdn.pixabay.com/photo/2020/03/04/08/53/dominica-4900966_1280.jpg" alt="Company Logo" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              "Cricket, a sport beloved worldwide, combines athleticism, strategy, and camaraderie. Players showcase their skills on the field, aiming for runs, wickets, and victory. Fans cheer passionately, uniting in the spirit of the game, celebrating every boundary and wicket with fervor."
            </p>
          </div>
        </div>
      </div>
      <CompanyGrid />
    </>
  );
};

export default About;
