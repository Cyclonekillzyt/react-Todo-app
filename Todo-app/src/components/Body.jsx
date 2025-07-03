import AppContext from '../context/AppContextCreator';
import { useContext } from 'react';
import BodyProject from '../helpers/BodyProjects';

function Body() {
  const { projects, currentProjectId } = useContext(AppContext);
  const renderProject = () => {
    return projects.find((project) => project.id === currentProjectId);
  };
  const selectedProject = renderProject();
  return (
    <div className="section">
      <h1>Test</h1>
      { selectedProject && <BodyProject project={selectedProject} key={selectedProject.id} />
}
    </div>
  );
}
export default Body;
