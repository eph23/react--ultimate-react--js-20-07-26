import skills from "./data.js";

function Avatar() {
    return (
        <div className="avatar">
            <img className="avatar" src="PP.jpg" alt="" />
        </div>
    );
}

function Intro() {
    return (
        <div>
            <h1>Ephraim S.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                fugit consectetur quam aspernatur sequi. Praesentium?
            </p>
        </div>
    );
}

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "advanced" && "💪"}
                {level === "intermediate" && "👍"}
                {level === "beginner" && "🍼"}
            </span>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <div className="header">
                <h1>Dev-Profile</h1>
            </div>
            <div className="card">
                <Avatar />
                <div className="data">
                    <Intro />
                    <SkillList />
                </div>
            </div>
        </div>
    );
}

export default App;
