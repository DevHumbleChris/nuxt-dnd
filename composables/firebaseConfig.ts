// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = () => {
  interface IFirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  }

  const runtimeConfig = useRuntimeConfig();

  const config: IFirebaseConfig = {
    apiKey: runtimeConfig.public.FIREBASE_API_KEY as string,
    authDomain: runtimeConfig.public.FIREBASE_AUTH_DOMAIN as string,
    projectId: runtimeConfig.public.FIREBASE_PROJECT_ID as string,
    storageBucket: runtimeConfig.public.FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: runtimeConfig.public
      .FIREBASE_MESSAGING_SENDER_ID as string,
    appId: runtimeConfig.public.FIREBASE_APP_ID as string,
    measurementId: runtimeConfig.public.FIREBASE_MEASUREMENT_ID as string,
  };

  const app = initializeApp(config);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  return {
    db,
    analytics
  }
};
