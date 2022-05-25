import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addCard } from '../../redux/cardsRedux';


const CardForm = ({ columnId }) => {

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(addCard({ columnId, title }));
      setTitle('');
    };

	return (
    <form
    className={styles.cardForm}
    onSubmit={handleSubmit}
    >
      <TextInput
        type="text"
        value={title}
        onChange={event => {setTitle(event.target.value)}}
      />
      <Button>Add card</Button>
    </form>
	);
};

export default CardForm;