import auth from '@react-native-firebase/auth';

export const signWithEmailPassword = (email, password) => {
  console.log('PASSWORD ----------------', email, password);
  return auth().signInWithEmailAndPassword(email, password);
};

export const signout = (email, password) => {
  return auth().signOut();
};
