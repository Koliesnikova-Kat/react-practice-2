import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const handlesubmit = event => {
    const form = event.target;
    const searchData = form.elements.search.value;
    onSubmit(searchData);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handlesubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
