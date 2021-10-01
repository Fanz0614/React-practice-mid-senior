import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      order: 0,
      firstinput: '',
      fistdropdown: '',
      seconddropdown: '',
      secondinput: '',
    },
  ],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addOne(state, action) {
      //debugger;
      if (action.payload.order === state.value.length - 1) {
        state.value = [
          ...state.value,
          { ...action.payload, order: action.payload.order + 1 },
        ];
      } else {
        const addValue = state.value.map((items) => {
          //debugger;
          if (items.order <= action.payload.order) {
            return items;
          } else {
            return { ...items, order: items.order + 1 };
          }
        });
        //debugger;
        addValue.push({ ...action.payload, order: action.payload.order + 1 });

        addValue.sort((a, b) => {
          return a.order - b.order;
        });
        state.value = addValue;
      }
    },

    handleTag(state, action) {
      const findResultByFilter = state.value.filter(
        (obj) => obj.order !== action.payload.newObj.order
      );
      findResultByFilter.push(action.payload.newObj);
      //sort
      findResultByFilter.sort((a, b) => {
        return a.order - b.order;
      });
      state.value = findResultByFilter;
    },
    resort(state, action) {
      const items = state.value;
      const item = items[action.payload.order];
      // for (var i = 0; i < state.value.length; i++) {
      //   if (state.value[i].order === state.value.length - 1) {
      //     state.value[i].order -= 1;
      //   } else if (state.value[i].order === 0) {
      //     state.value[i].order = state.value.length - 1;
      //   } else {
      //     items.splice(action.payload.order, 1);
      //     items.splice(action.payload.order + action.payload.diff, 0, item);
      //     state.value = items;
      //   }
      // }



      // for (var i=0; i<state.value.length; i++){
      //   if(action.payload.order===0 && action.payload.diff==='-1'){
      //     if(state.value[i]===0){
      //       return{...state.value,order:state.value.length-1};
      //     }else{
      //       return{...state.value,order:i-1};
      //     }
      //   }
      // }

      if (action.payload.order === 0 && action.payload.diff === '-1') {
        console.log(1)
        const filterUpArr = state.value.map((items) => {
          if (items.order === 0) {
            return { ...items, order: state.value.length - 1 };
          } else {
            return { ...items, order: items.order - 1 };
          }
        });
        state.value = filterUpArr;
      } else if (
        action.payload.order === state.value.length - 1 &&
        action.payload.diff === '1'
      ) {
        const filterDownArr=state.value.map(items=>{
          if(items.order===state.value.length-1){
            return {...items,order:0}
          }else{
             return{...items,order:items.order+1}
          }
        }
          )
        state.value=filterDownArr
      }else{
        if(action.payload.diff ==='-1'){
          const filterUpArr=state.value.map((items)=>{
            return {...items, order:items.order-1}
          })
          state.value=filterUpArr
        }else if(action.payload.diff === '1'){
          const filterDownArr=state.value.map((items)=>{
            return {...items, order:items.order+1}
          })
          state.value=filterDownArr
        }
      }

      // if(action.payload.order===state.value.length-1){
      //   action.payload.order-=1
      // }else if(action.payload.order===0){

      //   action.payload.order=state.value.length-1
      // }
    },
  },
});

export const { addOne, resort, handleTag } = listSlice.actions;

//index->find->change value

//assignment->https://www.cypress.io/
//https://docs.cypress.io/guides/getting-started/installing-cypress
//create pr(pull request)
