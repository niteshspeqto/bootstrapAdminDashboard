import { useState } from "react";
import "./Sidebar.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faGauge,
  faHouse,
  faLayerGroup,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebars() {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <button className="sb-button" onClick={() => setToggled(true)}>
      <FontAwesomeIcon  icon={faBars} style={{color: "#4E73DF"}} />
      </button>
      <Sidebar
        className={`sidebar app ${toggled ? "toggled" : ""}`}
        style={{ height: "100vh", position: "absolute", color: "black" }}
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
              <MenuItem icon={<FontAwesomeIcon size="lg" icon={faHouse} />}>
                Admin Panel
              </MenuItem>
            </div>
          </MenuItem>
          <hr />
        </Menu>

        <Menu>
          <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>Home</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faGauge} />}>
            Dashboard
          </MenuItem>
          <SubMenu
            defaultOpen
            label={"Products"}
            icon={<FontAwesomeIcon icon={faBagShopping} />}
          >
            <MenuItem
              icon={
                <FontAwesomeIcon
                  icon={<FontAwesomeIcon icon={faLayerGroup} />}
                />
              }
            >
              All Products
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faList} />}>
              Product Categories
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faPlus} />}>
              Add Product
            </MenuItem>
          </SubMenu>
          <SubMenu
            defaultOpen
            label={"Users"}
            icon={<FontAwesomeIcon icon={faList} />}
          >
            <MenuItem icon={<FontAwesomeIcon icon={faList} />}>
              Active Users
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faList} />}>
              Add Users
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
