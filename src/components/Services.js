import React, { useReducer } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const reducer = (state, action) => {};

const initialState = {
  services: [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "You can't use up creativity. The more you use, the more you have",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "You can't use up creativity. The more you use, the more you have",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "You can't use up creativity. The more you use, the more you have",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "You can't use up creativity. The more you use, the more you have",
    },
  ],
};

const Services = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {state.services.map((curelem, index) => {
          return (
            <article key={index} className="service">
              <span>{curelem.icon}</span>
              <h4>{curelem.title}</h4>
              <p>{curelem.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
