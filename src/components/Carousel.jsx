import { useEffect, useState } from 'react';
import { jobList } from '../data/job_data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [jobs, setJobs] = useState(jobList);
  const [currJob, setCurrentJob] = useState(0);

  const prevSlide = () => {
    setCurrentJob((oldPerson) => {
      const result = (oldPerson - 1 + jobs.length) % jobs.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentJob((oldPerson) => {
      const result = (oldPerson + 1) % jobs.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currJob]);

  return (
    <section className="slider-container">
      {jobs.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currJob)}%)`,
              opacity: personIndex === currJob ? 1 : 0,
              visibility: personIndex === currJob ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
