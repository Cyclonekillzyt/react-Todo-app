import { useContext } from 'react';
import AppContext from '../context/AppContextCreator';

const Actitvity = ({ activity }) => {
  const { editActivity, deleteActivity } = useContext(AppContext);
  return (
    <>
      <h2 className="activity">{activity.title}</h2>
      <button
        className="editActivity"
        onClick={() => editActivity(activity.id, true)}
      >
        ✎
      </button>
      <button
        className="deleteActivity"
        onClick={() => deleteActivity(activity.id)}
      >
        🗑
      </button>
    </>
  );
};
export default Actitvity;
