import React, { PropTypes } from 'react';

const ListRowView = props => {

  const issueCallback = (callback, item) => {
    if ( !callback ) {
      return;
    }
    
    return callback( item );
  }
  
  const makeItem = (display, callback) => {
    if ( ! display ) return null;
    console.log(`got item, ${JSON.stringify(props.item.name)}`);
    return (
      <display item={props.item} onClick={(item) => issueCallback( callback, props.item )} />
    );
  }

  return (
    <div>
      { makeItem( props.leftDecorator, props.onLeftDecoratorClicked ) }
      { makeItem( props.itemDisplay, props.onItemDisplayClicked ) }
      { makeItem( props.rightDecorator, props.onRightDecoratorClicked ) }
    </div>
  );
};

ListRowView.propTypes = {
  item: PropTypes.object.isRequired,
  
  // Remember, a "class" is really just a function in JavaScript
  leftDecorator: PropTypes.func,
  onLeftDecoratorClicked: PropTypes.func,
  rightDecorator: PropTypes.func,  
  onRightDecoratorClicked: PropTypes.func,
  itemDisplay: PropTypes.func,
  onItemDisplayClicked: PropTypes.func,
};

export default ListRowView;
