const CourseOverview = () => (
    <div className="text-sm space-y-4">
      <div>
        <h3 className="font-semibold">Course Rationale</h3>
        <p>Formal language, automata theory, and computation models…</p>
      </div>
      <div>
        <h3 className="font-semibold">Course Objectives</h3>
        <ul className="list-disc pl-5">
          <li>Understand core computation concepts</li>
          <li>Apply models and grammars</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Outcomes</h3>
        <ul className="list-decimal pl-5">
          <li>Differentiate machine types</li>
          <li>Apply CFG, PDA, Turing Machine models</li>
        </ul>
      </div>
    </div>
  );
  
  export default CourseOverview;
  