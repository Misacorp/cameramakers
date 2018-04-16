import React from 'react';
import PropTypes from 'prop-types';

function ShelfItem(props) {
  const {
    background,
    width,
    backgroundWidth,
    isActive,
  } = props;
  const brightness = isActive ? 1 : 0.5;

  const styles = {
    shelfItem: {
      display: 'inline-block',
      background: `url(${background}) center center no-repeat`,
      backgroundSize: `${backgroundWidth}px auto`,
      width: `${width}px`,
      height: '100%',
      filter: `brightness(${brightness})`,
      transitionProperty: 'width, background-size, filter',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
  };

  return (
    <div
      className="ShelfItem"
      style={styles.shelfItem}
      onClick={props.onClick}
    />
  );
}

ShelfItem.propTypes = {
  background: PropTypes.string,
  width: PropTypes.number,
  backgroundWidth: PropTypes.number,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

ShelfItem.defaultProps = {
  background: '',
  width: 0,
  backgroundWidth: 0,
  onClick: () => console.log('clicked'),
  isActive: false,
};

export default ShelfItem;