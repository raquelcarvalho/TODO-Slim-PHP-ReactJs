import React from 'react';

import Grid from '../template/grid';

import IconButton from '../template/iconButton';

export default props => {
  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  };
  return (
    <div role='form' className='todoForm'>
      <div className='row'>
        <Grid cols='12 4 3' className='name-input'>
          <input
            id='search'
            className='form-control'
            placeholder='Adicione um nome'
            onKeyUp={keyHandler}
            onChange={props.handleChange}
            value={props.search}
          />
        </Grid>
        <Grid cols='12 4 5'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma descrição'
            onKeyUp={keyHandler}
            onChange={props.handleChange}
            value={props.description}
          />
        </Grid>
        <Grid cols='12 3 1' className='actions-btns'>
          <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
          {/* <IconButton style='info' icon='search' onClick={props.handleSearch} /> */}
          <IconButton
            style='default'
            icon='close'
            onClick={props.handleClear}
          />
        </Grid>
        <Grid cols='12 4 3' className='form-select'>
          <div className='form-group'>
            <select
              className='form-control' 
              id='status'
              onChange={props.handleChange}>
              <option>Filtar por Status:</option>
              <option value='0'>A fazer</option>
              <option value='1'>Feito</option>
            </select>
          </div>
        </Grid>
      </div>
    </div>
  );
};
