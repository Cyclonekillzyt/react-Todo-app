import Actitvity from "./Activities";
import { useContext } from "react";
import AppContext from "../context/AppContextCreator";

const Project = ({project}) => {
  const {setProjectId, setshowActivityForm, setProjects} = useContext(AppContext)
  const addActivity = (id, bool) => {
    setProjectId(id)
    setshowActivityForm(bool)
  }

   const deleteProject = (id) => {
    setProjects(prev => prev.filter(project => project.id !== id))
  } 

  return(
    <div className="project">
      <h1>{project.title}</h1>
      <button className="addActivity" onClick={() => addActivity(project.id, true)}>+</button>
      <button className="deleteProject" onClick={() => deleteProject(project.id)}>🗑</button>
       {project.activities.map((activity) => (
          <Actitvity activity={activity} key={activity.id} />
        ))}
    </div>
  )
}

export default Project;