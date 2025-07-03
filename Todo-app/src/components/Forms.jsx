import AppContext from '../context/AppContextCreator';
import { useContext } from 'react';

export function ProjectForm() {
  const {
    title,
    setTitle,
    dueDate,
    setDueDate,
    priority,
    setPriority,
    setId,
    setProjects,
    getTodaysDate,
    setshowProjectForm,
  } = useContext(AppContext);

  const resetForm = () => {
    setTitle('');
    setDueDate(getTodaysDate());
    setPriority('ASAP');
    setshowProjectForm(false);
  };

  const handleSubmit = (e) => {
    const newId = Date.now().toString();
    e.preventDefault();
    setId(newId);
    const formData = { title, dueDate, priority, id: newId, activities: [] };
    setProjects((prev) => [...prev, formData]);
    resetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="Title">Title</label>
      <input
        type="text"
        id="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="DueDate">Due Date</label>
      <input
        type="Date"
        id="DueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <label htmlFor="Priority">Priority</label>
      <select
        id="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="Years">A Few Years</option>
        <option value="Year">A Year</option>
        <option value="Months">Few Months</option>
        <option value="Month">A Month</option>
        <option value="Weeks">A Few Weeks</option>
        <option value="Week">A Week</option>
        <option value="Days">Days</option>
        <option value="Today">Today</option>
        <option value="Hours">Hours</option>
        <option value="Hour">An Hour</option>
        <option value="Asap">ASAP</option>
      </select>
      <button type="button" className="cancel">
        Cancel
      </button>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}

export function ActivityForm() {
  const {
    title,
    setTitle,
    dueDate,
    setDueDate,
    priority,
    setPriority,
    setDescription,
    description,
    setId,
    setProjects,
    getTodaysDate,
    setshowActivityForm,
    projectId,
    activityId,
  } = useContext(AppContext);

  const resetForm = () => {
    setTitle('');
    setDueDate(getTodaysDate());
    setPriority('ASAP');
    setDescription('');
    setshowActivityForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now().toString();
    setId(newId);
    const formData = {
      title,
      dueDate,
      description,
      priority,
      id: newId,
      activities: [],
    };
    setProjects((prev) =>
      prev.map( project => {
        if (project.id === projectId){
          const activityExists = project.activities.find(activity => activity.id === activityId);
          if (activityExists){
            const updatedActivities = project.activities.map(activity => activity.id === activityId ? formData : activity);
            return {...project, activities: updatedActivities}
          }
          else{
            return {...project, activities: [...project.activities, formData]}
          }
        }
      }
      )
    );
    resetForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="Title">Title</label>
      <input
        type="text"
        id="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor="DueDate">Due Date</label>
      <input
        type="Date"
        id="DueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <label htmlFor="Priority">Priority</label>
      <select
        id="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="Years">A Few Years</option>
        <option value="Year">A Year</option>
        <option value="Months">Few Months</option>
        <option value="Month">A Month</option>
        <option value="Weeks">A Few Weeks</option>
        <option value="Week">A Week</option>
        <option value="Days">Days</option>
        <option value="Today">Today</option>
        <option value="Hours">Hours</option>
        <option value="Hour">An Hour</option>
        <option value="Asap">ASAP</option>
      </select>
      <button type="button" className="cancel">
        Cancel
      </button>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
