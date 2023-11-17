import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
 
const firebaseConfig = {
    // Objeto que nos brinda Firebase:
    apiKey: "AIzaSyDdtJJInyzApr6YNpJ2Vn580DsGuz0FBSc",
    authDomain: "proyecto-react-js-d2309.firebaseapp.com",
    projectId: "proyecto-react-js-d2309",
    storageBucket: "proyecto-react-js-d2309.appspot.com",
    messagingSenderId: "317365281291",
    appId: "1:317365281291:web:91789233f7e4ed360f5d0e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);