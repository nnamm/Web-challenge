import Firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDERID,
  appId: process.env.VUE_APP_FB_APPID,
  measurementId: process.env.VUE_APP_FB_MEASUREMENTID
}
const app = Firebase.initializeApp(firebaseConfig)
const db = Firebase.firestore(app)

export default db
