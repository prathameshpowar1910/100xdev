
import PropTypes from 'prop-types';

export default function Header({title}) {
  
  return (
    <div>The title is {title}</div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
