import React, { PropTypes } from 'react';
import ListItemView from './ListItemView';
import ListRowView from './ListRowView';

const ListView = props => {
  const itemDisplay = props.itemDisplay || ListItemView;

  return (
    <ul>
      {
        props.items.map( item => (
          <li key={item.name}>
            <ListRowView
              item={item}
              leftDecorator={props.leftDecorator}
              onLeftDecoratorClicked={props.onLeftDecoratorClicked}
              rightDecorator={props.rightDecorator}
              onRightDecoratorClicked={props.onRightDecoratorClicked}
              itemDisplay={props.itemDisplay}
              onItemDisplayClicked={props.onItemDisplayClicked}
            />
          </li>
        ))
      }
    </ul>
  );
};

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  
  // Remember, a "class" is really just a function in JavaScript
  leftDecorator: PropTypes.func,
  onLeftDecoratorClicked: PropTypes.func,
  rightDecorator: PropTypes.func,  
  onRightDecoratorClicked: PropTypes.func,
  itemDisplay: PropTypes.func,
  onItemDisplayClicked: PropTypes.func,
};

export default ListView;
