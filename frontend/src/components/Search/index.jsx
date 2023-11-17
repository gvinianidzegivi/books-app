import { useRef, useState } from 'react';
import { Form, useSearchParams, useSubmit } from 'react-router-dom';

const SearchComponent = () => {
  const searchRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams('query');
  const submit = useSubmit();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchRef.current.value;
    if (!query) return;
    setSearchParams({ query });
  };

  return (
    <Form onSubmit={handleSearchSubmit}>
      <input type='search' placeholder='Search Book' ref={searchRef} />
      <button type='submit'>Search</button>
    </Form>
  );
};

export default SearchComponent;
