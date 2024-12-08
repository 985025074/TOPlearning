import PropTypes from 'prop-types';
export default function Header({name, email, tel, location}) {
  return (
    <header>
      <h1>{name}</h1>
      <div className="information">
        <div className="infoItem">
          <i className="fa-solid fa-envelope"></i>
          <div className="email">{email}</div>
        </div>
        <div className="infoItem">
          <i className="fa-solid fa-phone"></i>
          <div className="tel">{tel}</div>
        </div>
        <div className="infoItem">
          <i className="fa-solid fa-house"></i>
          <div className="location">{location}</div>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };