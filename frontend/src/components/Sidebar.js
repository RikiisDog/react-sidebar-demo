import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SidebarIcon } from "./SidebarIcon";

export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <SidebarIcon />
            <ul className="SidebarList">
                {SidebarData.map((value, key) => (
                    <li key={key} className="row">
                        <NavLink to={value.path} className={({ isActive }) => (isActive ? "active row" : "row")}>
                            <div id="icon">{value.icon}</div>
                            <div id="icon">{value.title}</div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
