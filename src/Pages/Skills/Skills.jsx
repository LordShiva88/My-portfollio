import "./Skill.css";
import node from "../../assets/firebase.svg";

const Skills = () => {
  return (
    <div>
      <div className="card w-96">
        <img src={node} alt="" className="w-36" />
        {/* <h1 className="text-white">Firebase</h1> */}
      </div>
    </div>
  );
};

export default Skills;
