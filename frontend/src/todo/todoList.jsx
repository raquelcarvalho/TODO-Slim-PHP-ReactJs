import React from 'react';

import IconButton from '../template/iconButton';

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo, i) => (
      <div key={i} className={`card ${todo.status === '1' ? 'markedAsDone' : ''}`}>
        <div className='card-body'>
          <h5 className='card-title'>{todo.name}</h5>
          <p className='card-text'>{todo.description}</p>
          <IconButton
            style='sucess'
            icon='check'
            hide={todo.status === '1'}
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            style='warning'
            icon='undo'
            hide={!todo.status === '1'}
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            style='danger'
            icon='trash-o'
            hide={!todo.status === '1'}
            onClick={() => props.handleRemove(todo)}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className='card-columns'>
      {renderRows()}
    </div>
  );
};
