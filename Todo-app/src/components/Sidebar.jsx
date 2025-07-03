import AppContext from '../context/AppContextCreator';
import { useContext } from 'react';
import Project from '../helpers/SidebarProjects';

function Sidebar() {
  const { projects } = useContext(AppContext);
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>TODO</h1>
      </div>
      <div className="mainSection">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
