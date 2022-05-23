import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCartFavorite } from '../../redux/store';

const Card = (props) => {

  const dispatch = useDispatch();

  const cardId = props.id;

  const classChange = () => {
    dispatch(toggleCartFavorite(cardId));
  };

  return (
      <li className={styles.card}>
        {props.title}
        
        <button type="button"

          onClick={ () => { 
            classChange(
                props.id,
                props.isFavorite
              )
          }}

          className={
            clsx(
              styles.button,
              props.isFavorite && styles.active
            )
          }
        >
          <span
            className='fa fa-star-o'
          />
        </button>
      </li>
  );
};

export default Card