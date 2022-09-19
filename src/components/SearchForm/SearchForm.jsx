import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from '../SearchForm/searchForm.module.scss'

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
    <form action="" onSubmit={handleSabmit} className={s.form}>
      <input type="text" onChange={handleChange} value={formValue} className={s.input}/>
      <button type="submit" className={s.btn}>Search</button>
    </form>
  );
};
export default SearchForm;
