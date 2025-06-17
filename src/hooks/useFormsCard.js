import { useState, useEffect } from 'react';
import { useCartoes } from './useCartoes';
import { useNavigate, useLocation } from 'react-router-dom';

export const useFormCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const { cartoes, adicionarCartao, editarCartao } = useCartoes();

  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    img: '',
  });

  useEffect(() => {
    if (id !== undefined && cartoes[id]) {
      setFormData(cartoes[id]);
    }
  }, [id, cartoes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCartao = {
      id: Number(formData.id),
      nome: formData.nome,
      img: formData.img,
    };

    if (id === undefined) {
      adicionarCartao(novoCartao);
    } else {
      editarCartao(id, novoCartao);
    }

    navigate('/home');
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    modoEdicao: id !== undefined,
  };
};