import { useEffect, useState } from 'react';
import { cartoesBase } from '../models/cartoes';

const STORAGE_KEY = 'cartoes';

export const useCartoes = () => {
  const [cartoes, setCartoes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
      setCartoes(JSON.parse(data));
    } else {
      setCartoes(cartoesBase);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoesBase));
    }
  }, []);

  useEffect(() => {
    if (cartoes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoes));
    }
  }, [cartoes]);

  const adicionarCartao = (cartao) => setCartoes([...cartoes, cartao]);

  const editarCartao = (index, novoCartao) => {
    const novo = [...cartoes];
    novo[index] = novoCartao;
    setCartoes(novo);
  };

  const removerCartao = (index) => {
    const novo = [...cartoes];
    novo.splice(index, 1);
    setCartoes(novo);
  };

  return {
    cartoes,
    adicionarCartao,
    editarCartao,
    removerCartao,
  };
};