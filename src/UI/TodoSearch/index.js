import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [ params, setParams ] = useSearchParams();

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    
    let param = {
      search: event.target.value,
    }

    setParams(param);
  };

  useEffect(() => {
    const search = params.get('search') ?? '';
    setSearchValue(search);
  }, [params])

  return (
    <input
      className="TodoSearch"
      placeholder="Busca un ToDo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
