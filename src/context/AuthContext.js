// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [taLogado, setTaLogado] = useState(false); // Estado de autenticação

    // Função de login - deve ser chamada ao autenticar o usuário
    const login = () => {
        // Aqui você faria a lógica de autenticação real (API call)
        setTaLogado(true); // Apenas para simulação
    };

    // Função de logout
    const logout = () => {
        setTaLogado(false);
    };

    return (
        <AuthContext.Provider value={{ taLogado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
    return useContext(AuthContext);
};