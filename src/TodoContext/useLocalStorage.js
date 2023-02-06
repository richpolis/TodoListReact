import React from "react";

function useLocalStorage(itemLabel, initialValue) {
  
    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItems = localStorage.getItem(itemLabel);
          let parsedItems;
    
          if(!localStorageItems){
            localStorage.setItem(itemLabel, JSON.stringify(initialValue));
            parsedItems = initialValue;
          } else {
            parsedItems = JSON.parse(localStorageItems);
          }
          setItems(parsedItems);
          setLoading(false);
        }catch(e){
          setError(e);
        }
      }, 1000);
    });
  
    const saveItems = (newItems) => {
      try{
        const stringifiedItems = JSON.stringify(newItems);
        localStorage.setItem(itemLabel, stringifiedItems);
        setItems(newItems);
        setLoading(false);
      } catch(e) {
        setError(e);
      }
    };
  
    return {items, saveItems, loading, error};
  }

  export { useLocalStorage };