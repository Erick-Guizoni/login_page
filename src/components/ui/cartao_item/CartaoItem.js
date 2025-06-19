import styles from '../../../pages/home_page/home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function CartaoItem({ cartao, onEdit, onDelete }) {
  return (
    <div className={styles.Card}>
      {/* <img src={cartao.img} alt="image-cartao" /> */}
      <h1>{cartao.nome}</h1>
      <h4>{cartao.id}</h4>
      <div>
        <button className={styles.BinButton} onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button className={styles.PencilButton} onClick={onEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </div>
  );
}