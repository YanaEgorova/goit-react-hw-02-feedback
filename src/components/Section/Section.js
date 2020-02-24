import React from 'react';
import './Section.css';

const Section = ({ children, title }) => (
    <section className="Section">
        <h1 className="Section-title">{title}</h1>
        {children}
    </section>
);

export default Section;
