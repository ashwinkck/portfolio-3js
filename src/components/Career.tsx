import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E (CSE)</h4>
                <h5>YENEPOYA INSTITUTE OF TECHNOLOGY</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Bachelor of Engineering in Computer Science and Engineering.
              Focused on core computer science subjects, systems, competitive programming, and full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOFTWARE DEVELOPER INTERN</h4>
                <h5>THEAX</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led the planning and delivery of a student-focused academic management platform under senior engineering mentorship.
              Coordinated cross-functional teams on technology selection and UI/UX design, and oversaw the end-to-end development lifecycle.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI SUBJECT MATTER EXPERT</h4>
                <h5>THEAX</h5>
              </div>
              <h3>2026 - </h3>
            </div>
            <p>
              Trained and mentored 300+ students in Agentic AI, RAG, LangChain, CrewAI, PyTorch, and Generative AI. Designed backend APIs and relational database schemas using Python and Node.js. Built full-stack AI applications with React and Python, focusing on reliable data pipelines and maintainable architectures. Delivered deployment-ready products, including a confidential solution being prepared for presentation at the IBM Innovation Centre of Education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
