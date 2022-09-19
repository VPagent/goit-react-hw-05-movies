import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmitForm }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("query")
  const [formValue, setFormValue] = useState(query || "");

  console.log(query)
  const handleChange = event => {
    setFormValue(event.target.value);
  };

  const handleSabmit = event => {
    event.preventDefault();
    onSubmitForm(formValue);
    setSearchParams(formValue ? {query: formValue} : "")
  };
  return (
    <form action="" onSubmit={handleSabmit}>
      <input type="text" onChange={handleChange} value={formValue} />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
