import { signIn, signUp, signOut } from 'aws-amplify/auth';

export const login = async (email, password) => {
  try {
    await signIn(email, password);
    //successful login
  } catch (error) {
    console.error('Login failed:', error);
    //login error
  }
};

export const register = async (email, password) => {
  try {
    await signUp({
      username: email,
      password,
    });
    //successful registration
  } catch (error) {
    console.error('Registration failed:', error);
    //registration error
  }
};

export const logout = async () => {
  try {
    await signOut();
    //successful logout
  } catch (error) {
    console.error('Logout failed:', error);
    //logout error
  }
};
