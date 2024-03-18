import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from './firebaseConfig';

const auth = getAuth(firebaseApp);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    // Log the error or do any necessary cleanup
    
    console.error('An error occurred:', error);
    // Rethrow the exception
    // This will rethrow the caught exception
}
};

export { auth, signInWithGoogle };
