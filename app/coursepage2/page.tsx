import React from 'react';
import Header from '../dashboard/components/Header';

const CoursePage = () => {
  return (
    <div className="bg-[#f6f9fc] text-gray-800 font-sans">
        <Header/>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
        <div className="max-w-5xl mx-auto">
          <span className="bg-green-600 text-xs px-2 py-1 rounded-full">BEGINNER</span>
          <h1 className="text-2xl font-semibold mt-2">Theory of Computation (Spring 2025)</h1>
          <p className="text-sm mt-1">Md. Masum Billah</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto flex space-x-6 py-3 px-4 border-b">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Course</button>
          <button className="text-gray-600">Participants</button>
          <button className="text-gray-600">Grades</button>
          <button className="text-gray-600">Competencies</button>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto py-6 px-4 space-y-6">
        {/* Section - General */}
        <Section title="General">
          <Item title="Welcome to Theory of Computation" desc="Welcome message to my students" />
        </Section>

        {/* Section - Summary and Objectives */}
        <Section title="Course Summary and Objectives">
          <SubItem title="Course Rationale" content="The study of theory of computation..." />
          <SubItem title="Course Objectives" content="To provide a solid understanding..." />
          <SubItem title="Course Outcomes" content="CO1: Describe various models..." />
          <SubItem title="Course Assessment" content="Quiz: 10%, Midterm: 30%, Final: 40%..." />
          <SubItem title="Textbook" content="https://bit.ly/3Woez7Y" />
        </Section>

        {/* Lectures */}
        {[...Array(11)].map((_, i) => (
          <Section key={i} title={`Lectures of Week ${i + 1}`}>
            <Item title={`Lecture ${i + 1}`} desc={undefined} />
          </Section>
        ))}

        {/* Quizzes */}
        <Section title="Quiz 3">
          <Item title="Quiz 3" desc="Opened on: ... Due: ..." />
        </Section>

        {/* Assignment */}
        <Section title="Assignment Submission">
          <SubItem title="Presentation" content="Submit a presentation file based on..." />
        </Section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 mt-10">
          Privacy Policy © 2022 Daffodil International University. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white shadow rounded-lg">
    <div className="border-b px-4 py-3 font-semibold">{title}</div>
    <div className="p-4 space-y-2">{children}</div>
  </div>
);

interface ItemProps {
  title: string;
  desc?: string;
}

const Item: React.FC<ItemProps> = ({ title, desc }) => (
  <div className="border rounded p-3 hover:bg-gray-50 cursor-pointer">
    <div className="font-medium text-blue-600">{title}</div>
    {desc && <div className="text-sm text-gray-500">{desc}</div>}
  </div>
);

interface SubItemProps {
  title: string;
  content: string;
}

const SubItem: React.FC<SubItemProps> = ({ title, content }) => (
  <div className="text-sm">
    <div className="font-semibold mb-1">{title}</div>
    <div className="text-gray-700 whitespace-pre-line">{content}</div>
  </div>
);

export default CoursePage;
