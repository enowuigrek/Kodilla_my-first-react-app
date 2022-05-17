import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm}
      onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={searchString}
        onChange={event => 
          setSearchString(
          event.target.value
          )
        }
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;