// Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: ['Induction & Training Module', 'Gaming Blog', 'Clothing Website'],
      description: [
      'Induction & Training module designed and customised for Skippers Transport. ', 
      'Interactive blog/forum style website designed for gamers, by gamers.', 
      'Website for "New World Gear", our own clothing business.'],
      images: ['./public/images/project1.png', './public/images/project2.png', './public/images/project3.png'],
      links: ['https://github.com/duragmyreligion/bootcamp-project-1', 'https://github.com/duragmyreligion/bootcamp-project-2', 'https://github.com/duragmyreligion/bootcamp-project-3']
    },
    // Add more projects as needed
  ];

  return (
    <div style={{ paddingBottom: '10rem'}}>
      <h2 className='sub-header' 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.15)', 
        marginBottom: '0',
        paddingBottom: '2rem',
        paddingTop: '2rem', 
        }}>
          
          Portfolio

        </h2>

      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;