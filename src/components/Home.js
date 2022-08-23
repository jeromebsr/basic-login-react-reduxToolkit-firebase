import { useSelector } from "react-redux";
import Auth from './Auth';
import "../utils/firebase.config";
import { getAuth, signOut } from 'firebase/auth';
import { selectUser } from '../feature/userAuth.slice';

function Home() {
    const auth = getAuth();
    const user = useSelector(selectUser)

    return (
        <div>
            {user ? (
                <div className='container'>
                    <h1>Welcome Back, {user.displayName}!</h1>
                    <h2>User infos :</h2>
                    <ul>
                        <li>UID : {user.uid}</li>
                        <li>Username : {user.displayName}</li>
                        <li>Email : {user.email}</li>
                        <li>Last connexion : {new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(user.lastLoginAt)}</li>
                    </ul>

                    <button onClick={async () => await signOut(auth)}>
                        Se déconnecter
                    </button> 
                </div> 
            ) : (
                <Auth />
            )}
        </div>
    );
}

export default Home;