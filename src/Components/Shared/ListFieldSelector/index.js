import React from 'react';
import PropTypes from 'prop-types';

import { SelectField } from '../SelectFiled';

export const ListNameSelector = ({ nameTag, onChange, name, id }) => {
  return (
    <>
      <SelectField
        label={'type'}
        name={name}
        id={id}
        currencies={nameTag}
        onChange={onChange}
        SelectProps={{
          native: true,
        }}
      />
    </>
  );
};

ListNameSelector.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
  nameTag: PropTypes.string,
};
