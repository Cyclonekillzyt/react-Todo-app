import Actitvity from './SidebarActivities';
import { useContext } from 'react';
import AppContext from '../context/AppContextCreator';

const Project = ({ project }) => {
  const { addActivity, deleteProject, setCurrentProjectId } = useContext(AppContext);

  return (
    <div className="project" onClick={() => setCurrentProjectId(project.id)}>
      <h1>{project.title}</h1>
      <button
        className="addActivity"
        onClick={() => addActivity(project.id, true)}
      >
        +
      </button>
      <button
        className="deleteProject"
        onClick={() => deleteProject(project.id)}
      >
        🗑
      </button>
      {project.activities.map((activity) => (
        <Actitvity activity={activity} key={activity.id} />
      ))}
    </div>
  );
};

export default Project;
