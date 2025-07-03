import { useContext } from 'react';
import AppContext from '../context/AppContextCreator';
function Header() {
  const { setshowProjectForm } = useContext(AppContext);
  return (
    <div className="header">
      <div className="addProject">
        <button
          className="addprojectBtn"
          onClick={() => setshowProjectForm(true)}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Header;
