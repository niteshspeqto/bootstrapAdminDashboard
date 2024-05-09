import './App.css';
import Content from './layout/content/Content.jsx';
import Header from './layout/header/Header.jsx';
import Sidebars from './layout/sidebar/Sidebars.jsx';

export default function App() {

  return (
        <div className="main-container">
          <div className="sidebar-container">
          <Sidebars/>
          </div>
          <div className="app-container">
            <Header/>
            <Content/>
          </div>
        </div>
  )
}
