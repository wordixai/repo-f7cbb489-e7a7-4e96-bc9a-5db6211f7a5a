import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Mock validation
        if (email && password) {
          const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0],
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
          
          set({ user, isAuthenticated: true });
        } else {
          throw new Error('Invalid credentials');
        }
      },

      signup: async (email: string, password: string, name: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        if (email && password && name) {
          const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
          
          set({ user, isAuthenticated: true });
        } else {
          throw new Error('All fields are required');
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (data: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null
        }));
      }
    }),
    {
      name: 'pop-shop-auth'
    }
  )
);