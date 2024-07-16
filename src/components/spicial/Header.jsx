/* eslint-disable arrow-body-style */
const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-1">{title}</h2>
      <h5 className="text-green-500">{subtitle}</h5>
    </div>
  );
};

export default Header;
