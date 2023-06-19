import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'profile', text: 'My Profile' },
    { path: '/', text: 'Rockets' },
  ];
  return (
    <div>
      <div className="logo-box">logo</div>
      <div className="title-box">Title</div>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
        ;
      </ul>

    </div>
  );
};

export default Navbar;
