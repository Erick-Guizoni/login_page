// src/PrivateRoute.js

import { Navigate } from "react-router-dom";
// CORREÇÃO AQUI: o caminho deve ser relativo a onde PrivateRoute.js está
// Se PrivateRoute.js está em src/, e AuthContext.js está em src/context/,
// então o caminho correto é './context/AuthContext'
import { useAuth } from "./context/AuthContext"; 

const PrivateRoute = ({ children }) => {
    const { taLogado } = useAuth(); // Pega o estado de login do contexto

    // Se não estiver logado, redireciona para a rota principal ('/')
    // Caso contrário, renderiza os componentes filhos (a rota protegida)
    return taLogado ? children : <Navigate to="/" />;
};

export default PrivateRoute;