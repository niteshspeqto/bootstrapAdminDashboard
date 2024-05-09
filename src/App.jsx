import './App.css';
import Content from './layout/content/Content.jsx';
import Header from './layout/header/Header.jsx';
import Sidebar from './layout/sidebar/Sidebar.jsx';

export default function App() {

  return (
        <div className="main-container">
          <div className="sidebar-container">
          <Sidebar/>
          </div>
          <div className="app-container">
            <Header/>
            <Content/>
          </div>
        </div>
  )
}
