import { useEffect, useState } from 'react';
import AppContext from './AppContextCreator';
export function AppContextProvider({ children }) {
  function getTodaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const [showProjectForm, setshowProjectForm] = useState(false);
  const [showActivityForm, setshowActivityForm] = useState(false);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(getTodaysDate());
  const [priority, setPriority] = useState('ASAP');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);
  const [id, setId] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [activityId, setActivityId] = useState(null);

  const editActivity = (id, bool) => {
    const activityInfo = projects
      .flatMap((project) => project.activities)
      .find((a) => a.id === id);
    setTitle(activityInfo.title);
    setDescription(activityInfo.description);
    setDueDate(activityInfo.dueDate);
    setPriority(activityInfo.priority);
    setId(activityInfo.id);
    setActivityId(id);
    setshowActivityForm(bool);
  };

  const deleteActivity = (id) => {
    setProjects(prev => prev.map(project => ({
      ...project, activities: project.activities.filter(activity => activity.id !== id)
    })))
  } 

  const addActivity = (id, bool) => {
    setProjectId(id)
    setshowActivityForm(bool)
  }

   const deleteProject = (id) => {
    setProjects(prev => prev.filter(project => project.id !== id))
  } 

  const [currentProjectId, setCurrentProjectId] = useState(null)


  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  return (
    <AppContext.Provider
      value={{
        showProjectForm,
        setshowProjectForm,
        title,
        setDueDate,
        setPriority,
        setTitle,
        dueDate,
        priority,
        setDescription,
        description,
        id,
        setId,
        setProjects,
        projects,
        getTodaysDate,
        setProjectId,
        activityId,
        setActivityId,
        projectId,
        setshowActivityForm,
        showActivityForm,
        editActivity,
        deleteActivity,
        addActivity,deleteProject,
        currentProjectId, setCurrentProjectId
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
