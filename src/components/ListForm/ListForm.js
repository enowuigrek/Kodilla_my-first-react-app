import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import shortid from 'shortid';

const ListForm = () => {
    
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addList({ id: shortid(), title, description }));
    setTitle('');
    setDescription('');
  };

	return (
    <form
      className={styles.listForm}
      onSubmit={handleSubmit}>
      <label>
        Title:
      </label>
        <TextInput
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
        }}
        />
      <label>
        Description:
      </label>
        <TextInput
        type="text"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value)
        }}
        />
        <Button>Add list</Button>
    </form>
	);
};

export default ListForm; 