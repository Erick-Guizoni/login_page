import { FixedSizeGrid } from "react-window";
import styles from '../../../pages/home_page/home.module.scss';
import CartaoItem from '../../ui/cartao_item/CartaoItem';

export default function CartaoGrid({ cartoes, onAdd, onEdit, onDelete }) {
  const columnCount = 5;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;

    if (index - 1 >= cartoes.length) return null;

    return (
      <div style={style}>
        {index >= cartoes.length ? (
          <div className={`${styles.Card} ${styles.AddCard}`} onClick={onAdd}>
            <h1 style={{ fontSize: "5vw" }}>+</h1>
          </div>
        ) : (
          <CartaoItem
            cartao={cartoes[index]}
            onDelete={() => onDelete(index)}
            onEdit={() => onEdit(index)}
          />
        )}
      </div>
    );
  };

  return (
    <FixedSizeGrid
      columnCount={columnCount}
      columnWidth={250}
      rowCount={Math.ceil((cartoes.length + 1) / columnCount)}
      rowHeight={300}
      height={1000}
      width={columnCount * 250}
      className={styles.Grind}
    >
      {Cell}
    </FixedSizeGrid>
  );
}