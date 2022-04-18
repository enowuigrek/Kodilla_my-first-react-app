import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label className={styles.ColumnForm}>Title: </label><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label className={styles.ColumnForm}>Icon: </label><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;