import { useContext } from 'react';
import AppContext from './context/AppContextCreator';
import { ProjectForm } from './components/Forms';
import { ActivityForm } from './components/Forms';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Body from './components/Body';
function App() {
  const { showProjectForm, showActivityForm } = useContext(AppContext);

  return (
    <>
      <Header />
      <Sidebar />
      {showProjectForm && <ProjectForm />}
      {showActivityForm && <ActivityForm />}
      <Body/>
    </>
  );
}

export default App;
