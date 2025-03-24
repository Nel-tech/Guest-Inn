// src/Firebase/Auth/authService.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './Config';
 import { FirebaseError } from 'firebase/app';
import { getAuth } from 'firebase/auth';


export const signup = async (email, password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    throw new Error('Passwords do not match');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);

  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('The email is already in use. Please log in instead.');
      }
      console.error('Error signing up:', error.message);
    } else {
      console.error('Unknown error:', error);
      throw error; // Rethrow the error to handle it further upstream if needed.
    }
  }
};


// Sign in function
export const signin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/invalid-credential') {
        throw new Error('Invalid Email or password.');
      }
      console.error('Error signing up:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
};


// Sign out function
export const signout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};


export const getCurrentUser = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return user.email;
  } else {
    return null;
  }
};

// Payment Gateway



