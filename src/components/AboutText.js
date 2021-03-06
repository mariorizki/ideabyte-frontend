import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  max-width: 500px;
`;

const AboutText = () => {
  return (
    <div>
      <h2>About Idea Byte</h2>
      <Section>
        <p>
          Welcome to{' '}
          <span role="img" aria-label="bulb">
            💡
          </span>
          Idea Byte!
        </p>
        <p>
          <span role="img" aria-label="bulb">
            💡
          </span>
          Idea Byte helps ideators, innovators, developers, and any other humans
          to find and share ideas for inspiration. To date, there has been
          plenty of ideas — big and small — have come to be shared in the
          community.
        </p>
        <p>
          This full stack web application is developed in just 5 days at{' '}
          <a href="https://impactbyte.com">Impact Byte</a>, the fastest
          intensive full stack web with JavaScript technologies coding bootcamp
          on Earth. Visit{' '}
          <a href="https://impactbyte.com">https://impactbyte.com</a>
        </p>
        <p>
          To see the whole source code of this application, visit{' '}
          <a href="https://github.com/ideabyte">https://github.com/ideabyte</a>
        </p>
        <p>
          We use Git, GitHub, Figma, VS Code, HTML5, CSS3, JavaScript, React,
          React Hot Reload, React Router, React Helmet, Emotion, Redux, Netlify,
          Node.js, Express, MongoDB, Mongoose, MySQL, Knex.js, Objection.js,
          Heroku, Google Cloud Platform, and variety of other tools on Linux and
          macOS.
        </p>
      </Section>
    </div>
  );
};

export default AboutText;
