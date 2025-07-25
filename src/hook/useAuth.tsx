// auth.context.tsx
import { createContext, useContext, useState, useCallback } from 'react';
import { router } from "expo-router";

// Interface pour les données utilisateur
interface UserData {
  username: string;
  nom: string;
  email: string;
  phone: string;
  id_user: number;
}

// Interface pour le contexte d'authentification
interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
}

// Création du contexte avec des valeurs par défaut
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => console.warn("Login function called outside AuthProvider"),
  logout: () => console.warn("Logout function called outside AuthProvider")
});

// Provider d'authentification
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // État d'authentification et données utilisateur
  const [authState, setAuthState] = useState<{
    isAuthenticated: boolean;
    user: UserData | null;
  }>({
    isAuthenticated: false,
    user: null
  });

  /**
   * Connecte l'utilisateur et redirige vers l'accueil
   * @param userData Les données de l'utilisateur à stocker
   */
  const login = useCallback((userData: UserData) => {
    setAuthState({
      isAuthenticated: true,
      user: userData
    });
    router.replace('(home)'); // Redirection vers l'accueil
  }, []);

  /**
   * Déconnecte l'utilisateur et redirige vers l'authentification
   */
  const logout = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      user: null
    });
    router.replace('(auth)'); // Redirection vers l'écran d'authentification
  }, []);

  // Valeurs fournies par le contexte
  const contextValue = {
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook personnalisé pour accéder au contexte d'authentification
 * @throws Error si utilisé en dehors d'un AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


// import { createContext, useContext, useState, useCallback } from 'react';
// import { router, useRouter } from "expo-router";


// interface UserData {
//   username: string;
//   nom: string;
//   email: string;
//   phone: string;
//   id_user: number;
// }

// interface AuthHooks {
//   isAuthenticated: boolean;
//   user: UserData | null;
//   login: (userData: UserData) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthHooks>({
//   isAuthenticated: false,
//   login: () => {
//     console.warn("Login function called outside AuthProvider");
//   },
//   logout: () => {
//     console.warn("Logout function called outside AuthProvider");
//   }
// });

// // export const AuthProvider = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   // const router = useRouter();

// //   const login = useCallback((v: boolean) => {
// //     setIsAuthenticated(v);
// //     if (v) {
// //       setTimeout(() => {
// //         router.push('(home)');
// //       }, 0);
// //     }
// //   }, [router]);

// //   const logout = useCallback((v: boolean) => {
// //     setIsAuthenticated(!v);
// //     router.replace("/(auth)/login");
// //   }, [router]);

// //   return (
// //     <AuthContext.Provider value={{ 
// //       isAuthenticated, 
// //       login, 
// //       logout 
// //     }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };
// export const AuthProvider = ({ children }) => {
//   const [state, setState] = useState({
//     isAuthenticated: false,
//     user: null as UserData | null
//   });

//   const login = useCallback((userData: UserData) => {
//     if (userData) {
//       setState({
//         isAuthenticated: true,
//         user: {
//           username: userData.username,
//           nom: userData.nom,
//           email: userData.email,
//           phone: userData.phone,
//           id_user: userData.id_user,
//         },
//       });
//       router.replace('(home)');
//     } else {
//       console.error("User data is invalid");
//     }
//   }, []);

//   const logout = useCallback(() => {
//     setState({
//       isAuthenticated: false,
//       user: null
//     });
//     router.replace('(auth)'); // Redirige vers la page de connexion
//   }, []);

//   return (
//     <AuthContext.Provider value={{ 
//       isAuthenticated: state.isAuthenticated,
//       user: state.user,
//       login, 
//       logout 
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };




// import { createContext, useContext, useState, useCallback, useEffect } from 'react';
// import { router, useRouter } from "expo-router";
// import * as SecureStore from 'expo-secure-store';

// interface UserData {
//   id_user: string;
//   username: string;
//   name: string;
//   email: string;
//   phone: string;
//   // balance?: number;
// }

// interface AuthState {
//   isAuthenticated: boolean;
//   user: UserData | null;
//   loading: boolean;
// }

// interface AuthHooks extends AuthState {
//   login: (userData: UserData, token: string) => Promise<void>;
//   logout: () => Promise<void>;
//   updateUser: (userData: Partial<UserData>) => void;
// }

// const AuthContext = createContext<AuthHooks>({
//   isAuthenticated: false,
//   user: null,
//   loading: true,
//   login: async () => {
//     console.warn("Login function called outside AuthProvider");
//   },
//   logout: async () => {
//     console.warn("Logout function called outside AuthProvider");
//   },
//   updateUser: () => {
//     console.warn("UpdateUser function called outside AuthProvider");
//   }
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, setState] = useState<AuthState>({
//     isAuthenticated: false,
//     user: null,
//     loading: true
//   });
//   const router = useRouter();

//   // Vérifier l'authentification au montage
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const token = await SecureStore.getItemAsync('authToken');
//         const userData = await SecureStore.getItemAsync('userData');
        
//         if (token && userData) {
//           setState({
//             isAuthenticated: true,
//             user: JSON.parse(userData),
//             loading: false
//           });
//         } else {
//           setState(prev => ({ ...prev, loading: false }));
//         }
//       } catch (error) {
//         console.error('Auth check failed:', error);
//         setState(prev => ({ ...prev, loading: false }));
//       }
//     };

//     checkAuth();
//   }, []);

//   const login = useCallback(async (userData: UserData, token: string) => {
//     try {
//       await SecureStore.setItemAsync('authToken', token);
//       await SecureStore.setItemAsync('userData', JSON.stringify(userData));
      
//       setState({
//         isAuthenticated: true,
//         user: userData,
//         loading: false
//       });
      
//       router.replace('/(home)');
//     } catch (error) {
//       console.error('Login failed:', error);
//       throw error;
//     }
//   }, [router]);

//   const logout = useCallback(async () => {
//     try {
//       await SecureStore.deleteItemAsync('authToken');
//       await SecureStore.deleteItemAsync('userData');
      
//       setState({
//         isAuthenticated: false,
//         user: null,
//         loading: false
//       });
      
//       router.replace('/(auth)/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   }, [router]);

//   const updateUser = useCallback((userData: Partial<UserData>) => {
//     setState(prev => {
//       if (!prev.user) return prev;
      
//       const updatedUser = { ...prev.user, ...userData };
//       SecureStore.setItemAsync('userData', JSON.stringify(updatedUser));
      
//       return {
//         ...prev,
//         user: updatedUser
//       };
//     });
//   }, []);

//   return (
//     <AuthContext.Provider value={{
//       ...state,
//       login,
//       logout,
//       updateUser
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };



// // import { createContext, useContext, useState } from 'react';
// // import { useRouter } from "expo-router"; // Importez useRouter

// // interface AuthHooks {
// //   isAuthenticated: boolean;
// //   login:(v:boolean)=>void;
// //   logout:(v:boolean)=>void
// // }
// // const AuthContext = createContext<AuthHooks>({
// //   isAuthenticated: false,
// //   login: function (v: boolean): void {
// //     console.log("Login function not implemented.");
// //     throw new Error('Function not implemented.');
// //   },
// //   logout: function (v: boolean): void {
// //     throw new Error('Function not implemented.');
// //   }
// // });

// // export const AuthProvider = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const router = useRouter(); // Initialisez le routeur

// //   // const login = () => setIsAuthenticated(true);
// //   // const logout = () => setIsAuthenticated(false);

// //   const login = (v: boolean) => {
// //     setIsAuthenticated(v);
// //     if (v) {
// //       console.log("Login successful, redirecting to home...");      
// //       // router.replace("/(app)/home"); // replace au lieu de push pour éviter de revenir en arrière
// //       // router.push("/(app)/index"); // Redirigez vers la route "home" après connexion réussie
// //     }
// //   };

// //   const logout = (v: boolean) => {
// //     setIsAuthenticated(!v);
// //     router.push("/(auth)/login"); // Redirigez vers la page de connexion après déconnexion
// //   };
  
// //   return (
// //     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
