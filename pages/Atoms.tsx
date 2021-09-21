import { atom } from "recoil";
import { TodoContent } from "./types";

export const todoState = atom({
  key: 'todoState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const todoList = atom<TodoContent[]>({
  key: 'todoList',
  default: []
})

export const updateList = atom({
  key: 'updateList',
  default: false
})