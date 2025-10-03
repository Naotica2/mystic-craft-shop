import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  edition: 'java' | 'bedrock';
}

interface AuthContextType {
  user: User | null;
  login: (username: string, edition: 'java' | 'bedrock') => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('mcstore_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (username: string, edition: 'java' | 'bedrock') => {
    const userData = { username, edition };
    setUser(userData);
    localStorage.setItem('mcstore_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mcstore_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
