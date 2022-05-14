import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ColumnForm = () => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({
        type: 'ADD_COLUMN',
        payload: { title, icon }
      });
      setTitle('');
      setIcon('');
    };

	return (
    <form
      className={styles.columnForm}
      onSubmit={handleSubmit}>
      <label className={styles.ColumnForm}>
        Title:
      </label>
      <TextInput
        type="text"
        value={title}
        onChange={event => {
          setTitle(event.target.value)
        }}
      />
      <label className={styles.ColumnForm}>
        Icon:
      </label>
      <TextInput
        type="text"
        value={icon}
        onChange={event => {
        setIcon(event.target.value)
        }}
      />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;