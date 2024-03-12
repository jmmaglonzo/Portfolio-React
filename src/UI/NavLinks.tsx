import { navLinks } from "../data/data";

function NavLinks() {
  return (
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>{link.link}</li>
      ))}
    </ul>
  );
}

export default NavLinks;
