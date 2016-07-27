import React, { PropTypes } from 'react';

const ListItemView = props => (
    <p>{props.item.name}</p>
);

ListItemView.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItemView;
