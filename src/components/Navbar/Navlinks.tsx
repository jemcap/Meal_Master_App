import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/planner", text: "Meal Planner" },
  { id: 2, url: "/about", text: "About" },
];

const Navlinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <ul key={id}>
            <li>
              <NavLink to={url} className="text-black hover:text-teal-200">
                {text}
              </NavLink>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Navlinks;
