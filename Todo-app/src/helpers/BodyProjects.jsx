import AppContext from '../context/AppContextCreator';
import { useContext } from 'react';
import BodyActivity from './BodyActivity';
const BodyProject = ({ project }) => {
  const { addActivity, deleteProject } = useContext(AppContext);
  return (
    <div className="postItSection">
      <h1>{project.title}</h1>
      <button
        className="addActivity"
        onClick={() => addActivity(project.id, true)}
      >
        +
      </button>
      <button
        className="deleteProjectBody"
        onClick={() => deleteProject(project.id)}
      >🗑</button>
      {project.activities.map((activity) => (
        <BodyActivity activity={activity} key={activity.id} />
      ))}
    </div>
  );
};

export default BodyProject;
