import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@{company}  </a>
        </h3>
        <span>{time | address}</span>
        <p>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul>
          <Details 
            position={'Front-End Developer'}
            address={'Nairobi, Kenya'}
            company={'Gitstart YC6'}
            companyLink={''}
            time={'2022-08 - 2023-03'}
            work={'Tested web-based product functionality and delivered iterations to customer, while using improved tools to boost user interaction and deliver design versatility.'}
            key={'2022-08 - 2023-03'}
          />
          <Details 
            position={'Front-End Developer'}
            address={'Nairobi, Kenya'}
            company={'Mombo Sacco'}
            companyLink={''}
            time={'2021-08 - 2022-07'}
            work={'Collaborated with stakeholders duting development processes to confirm creative proposals and design best practices.'}
            key={'2021-08 - 2022-07'}
          />
          <Details 
            position={'Mobile Application Developer'}
            address={'Nairobi, Kenya'}
            company={'Medbook Kenya Limited'}
            companyLink={''}
            time={'2019-05 - 2021-05'}
            work={'Tested web-based product functionality and delivered iterations to customer, while using improved tools to boost user interaction and deliver design versatility.'}
            key={'2019-05 - 2021-05'}
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
