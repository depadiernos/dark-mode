import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [localValue, setLocalValue] = useState(()=>{
    const item = window.localStorage.getItem(localValue)
    return JSON.parse(item) || initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setLocalValue(value)
  }

  return [localValue, setValue]
}