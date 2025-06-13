import { useNavigate } from 'react-router-dom';
import { useCartoes } from '../../hooks/useCartoes';
import CartaoGrid from '../../components/container/cartao_grid/CartaoGrid';

export default function Home() {
  const { cartoes, removerCartao } = useCartoes();
  const navigate = useNavigate();

  return (
    <CartaoGrid
      cartoes={cartoes}
      onAdd={() => navigate('/formCard')}
      onEdit={(id) => navigate('/formCard', { state: { id } })}
      onDelete={removerCartao}
    />
  );
}