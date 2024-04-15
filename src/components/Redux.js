import { createSlice, configureStore } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'myList',
    initialState: {
      list: JSON.parse(localStorage.getItem('mytodolist')) || [{text:"Type task and click on 'Add'",isDone:false},{text:"Click once on task to mark it done.",isDone:false},{text:"Click on a done task to delete it",isDone:false}]
    },
    reducers: {
      add: (state,action) => {
        if(action.payload.text === "") return;
        const item = state.list.find((item)=> item.text === action.payload.text);
        if(item){ alert("already added")}
        else {state.list.push({text:action.payload.text,isDone:false})}
        localStorage.setItem('mytodolist',JSON.stringify(state.list))
      },
      task: (state,action) => {
        const item = state.list.find((item)=> item.text === action.payload.text);
        if(!item.isDone){
            item.isDone = !item.isDone
            const newlist = state.list.filter((item) => item.text !== action.payload.text)
            newlist.push({text:item.text,isDone:item.isDone})
            state.list = newlist
            localStorage.setItem('mytodolist',JSON.stringify(state.list))
        }else{
            const newlist = state.list.filter((item) => item.text !== action.payload.text)
            state.list = newlist
            localStorage.setItem('mytodolist',JSON.stringify(state.list))
        }
      },
    }
  })
  
export const { add, task} = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export {store};