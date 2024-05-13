import { useState } from "react";
import "./Sidebar.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faCartShopping,
  faGauge,
  faHouse,
  faLayerGroup,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebars() {
  const [toggled, setToggled] = useState(false);
  // const [tab,setTab]=useState("Dashboard");

  return (
    <div>
      <button className="sb-button" onClick={() => setToggled(true)}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#4E73DF" }} />
      </button>
      <Sidebar
        className={`sidebar app ${toggled ? "toggled" : ""}`}
        style={{ height: "100vh", position: "absolute", color: "white", background:"transparent !" }}
        width={"20%"}
        
        toggled={toggled}
        backgroundColor={"#4E73DF"}
        breakPoint="xs" // Set the breakpoint to control the sidebar behavior
        onToggle={() => setToggled(!toggled)}
        onBackdropClick={() => setToggled(false)}
      >
        <Menu>
          <MenuItem>
            <div
              style={{
                padding: "9px",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: "1px",
              }}
            >
              <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>
              <MenuItem>Admin Panel</MenuItem>
              </Link>
            </div>
          </MenuItem>
          <hr />
        </Menu>

        <Menu>
          <Link to={"/dashboard"} style={{ color: 'white', textDecoration: 'none' }}>
            <MenuItem icon={<FontAwesomeIcon icon={faGauge} />}>
              Dashboard
            </MenuItem>
          </Link>
          <SubMenu
            label={"Products"}
            icon={<FontAwesomeIcon icon={faBagShopping} />}
          >
            <Link to={"/products/allproducts"} style={{ color: 'white', textDecoration: 'none' }}>
              <MenuItem className="submenu-items" icon={<FontAwesomeIcon icon={faLayerGroup} />}>
                All Products
              </MenuItem>
            </Link>
            <Link to={"/products/category"} style={{ color: 'white', textDecoration: 'none' }}>
              <MenuItem className="submenu-items" icon={<FontAwesomeIcon icon={faList} />}>
                Categories
              </MenuItem>
            </Link>
            <Link to={"/products/addItem"} style={{ color: 'white', textDecoration: 'none' }}>
              <MenuItem className="submenu-items" icon={<FontAwesomeIcon icon={faPlus} />}>
                Add Item
              </MenuItem>
            </Link>
          </SubMenu>
          <SubMenu label={"Users"} icon={<FontAwesomeIcon icon={faList} />}>
            <MenuItem className="submenu-items" icon={<FontAwesomeIcon icon={faList} />}>
              Active Users
            </MenuItem>
            <MenuItem className="submenu-items" icon={<FontAwesomeIcon icon={faList} />}>
              Add Users
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
