import PropTypes from 'prop-types';
import { memo } from 'react';

const Header = memo(function Header({ title }) { //! memo is a higher order component that will prevent the component from re-rendering if the props have not changed
  return (
    <div>The title is: {title}</div>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;