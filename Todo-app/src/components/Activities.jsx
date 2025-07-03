import { useContext } from 'react';
import AppContext from '../context/AppContextCreator';

const Actitvity = ({ activity }) => {
  const {
    setActivityId,
    setshowActivityForm,
    projects,
    setTitle,
    setDueDate,
    setPriority,
    setDescription,
    setId,
    setProjects
  } = useContext(AppContext);

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

  return (
    <>
      <h2 className="activity">{activity.title}</h2>
      <button
        className="editActivity"
        onClick={() => editActivity(activity.id, true)}
      >
        ✎
      </button>
      <button className="deleteActivity" onClick={() => deleteActivity(activity.id)}>🗑</button>
    </>
  );
};
export default Actitvity;
