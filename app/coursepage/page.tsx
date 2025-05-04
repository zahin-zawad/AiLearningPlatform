//this page is depricated... keeping the code because it may be needed in future

import CourseHeader from "./components/CourseHeader";
import TabNav from "./components/TabNav";
import AccordionSection from "./components/AccordionSection";
import LectureItem from "./components/LectureItem";
import ResourceFile from "./components/ResourceFile";
import CourseOverview from "./components/CourseOverview";
import Footer from "./components/Footer";
import Header from "../dashboard/components/Header";

export default function CoursePage() {
  return (
    <div>
        <Header/>
        <div className="max-w-4xl mx-auto px-4 py-6">
        
        <CourseHeader />
        <TabNav />

        <AccordionSection title="Welcome to Theory of Computation">
            <p>Hello students, welcome message here...</p>
        </AccordionSection>

        <AccordionSection title="Course Summary and Objectives">
            <CourseOverview />
            <div className="mt-2">
            <ResourceFile title="CSE Course Outline File" />
            </div>
        </AccordionSection>

        <AccordionSection title="Lecture of Week 1">
            <LectureItem title="Lecture 1 and 2" />
        </AccordionSection>

        <AccordionSection title="Lecture of Week 2">
            <LectureItem title="Lecture 1 and 2" />
        </AccordionSection>

        <AccordionSection title="Quiz 3">
            <ResourceFile title="Quiz File Download" />
        </AccordionSection>

        <AccordionSection title="Assignment Submission">
            <ResourceFile title="Presentation Instructions" />
        </AccordionSection>

        <Footer />
        </div>
    </div>
  );
}
