import { useContext } from 'react';
import AppContext from '../context/AppContextCreator';

const BodyActivity = ({ activity }) => {
  const { editActivity } = useContext(AppContext);
  return (
    <div className="postIt" onClick={() => editActivity(activity.id, true)}>
      <p className="postItHeader">{activity.title}</p>
      <p className="postItMessage">{activity.description}</p>
    </div>
  );
};

export default BodyActivity;
