import React from 'react';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';
import SkillList from '../components/SkillList';
import EmploymentHistory from '../components/EmploymentHistory';
import EducationHistory from '../components/EducationHistory';
import InterestList from '../components/InterestList';

export default () => (
  <Layout>
    <PageMetadata
      title="Curriculum Vitae"
      description="Find out about Christopher Wheatley's skills, experience and qualifications in software development."
    />
    <article>
      <h1>Curriculum Vitae</h1>
      <p>
        Developer with a degree in computer science and 4 years commercial experience using
        web technologies. Conscientious, comitted and friendly.
      </p>
      <SkillList />
      <EmploymentHistory />
      <EducationHistory />
      <InterestList />
    </article>
  </Layout>
);
