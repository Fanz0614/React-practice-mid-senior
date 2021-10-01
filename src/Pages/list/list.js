import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { resort } from './listSlice';
import { InputList } from '../../Components/Layout/InputList';

export const List = () => {
  const dispatch = useDispatch();
  const diffPlus = '-1';
  const diffMinus = '1';
  const initialListState = useSelector((state) => state.listdetails);
  //console.log(initialListState);
  const creatList = () => {
    return initialListState.value.map((items, index) => {
      const sort = (diff) => {
        dispatch(resort({ order:items.order,diff }));
      };
    
      return (
        <div key={index}>
          <InputList
            id={index}
            sortUp={() => sort(diffPlus)}
            sortDown={() => sort(diffMinus)}
            items={items}
          />
        </div>
      );
    });
  };
  return <>{creatList()}</>;
};
