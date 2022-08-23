import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, login, register } from '../feature/userAuth.slice';

function Auth() {
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorRegister, setErrorRegister] = useState(false);
    const [loginIsLoading, setLoginIsLoading] = useState(false);
    const [registerIsLoading, setRegisterIsLoading] = useState(false);
    const dispatch = useDispatch();
    
    const handleLogin = async (e) => {
        e.preventDefault();

        setLoginIsLoading(true)
        const {email, password} = e.target.elements;

        try {
            await dispatch(login({ email: email.value, password: password.value }))
        } catch (e) {
            setLoginIsLoading(false);
            setErrorLogin(e.message)
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        setRegisterIsLoading(true);
        const {username, email, password, password_conf} = e.target.elements;
        
        if(password.value === password_conf.value) {
            try {
                await dispatch(register({ username: username.value, email: email.value, password: password.value }))
            } catch (e) {
                setRegisterIsLoading(false)
                setErrorRegister(e.message)
            }
        }else {
            setRegisterIsLoading(false)
            setErrorRegister('Les mots de passe ne sont pas indentiques.');
            console.log(password.value, password_conf.value);
        }
        
    }

    return (
        <div className='container'>
            <div className='grid'>
                <div>
                    <h2><i className='fas fa-user'></i> Se connecter</h2>
                    <form onSubmit={(e) => handleLogin(e)}>
                        <div>
                            <label htmlFor="email">
                                Adresse Email
                                <input 
                                    type='email'
                                    name='email'
                                    placeholder="Adresse Email"
                                    aria-invalid={errorLogin ? "true" : null}
                                    required 
                                />
                            </label>
                            <label htmlFor="password">
                                Mot de passe
                                <input 
                                    type='password'
                                    name='password'
                                    placeholder="Mot de passe" 
                                    aria-invalid={errorLogin ? "true" : null}
                                    required 
                                />
                            </label>
                        </div>
                        <button aria-busy={loginIsLoading} type="submit"><i className="fa-solid fa-arrow-right-to-bracket"></i> Se connecter</button>
                        <span>{errorLogin && errorLogin}</span>
                    </form>
                </div>
                <div>
                    <h2><i className="fa-solid fa-user-plus"></i> S'enregistrer</h2>
                    <form onSubmit={(e) => handleRegister(e)}>
                        <div>
                            <label htmlFor="email">
                                Pseudo
                                <input 
                                    type='text'
                                    name='username'
                                    placeholder="Choisissez votre Pseudo"
                                    aria-invalid={errorRegister ? "true" : null}
                                    required 
                                />
                            </label>
                            <label htmlFor="email">
                                Adresse Email
                                <input 
                                    type='email'
                                    name='email'
                                    placeholder="Votre meilleure adresse email"
                                    aria-invalid={errorRegister ? "true" : null}
                                    required 
                                />
                            </label>
                            <label htmlFor="password">
                                Mot de passe
                                <input 
                                    type='password'
                                    name='password'
                                    placeholder="Mot de passe" 
                                    aria-invalid={errorRegister ? "true" : null}
                                    required 
                                />
                            </label>
                            <label htmlFor="password_conf">
                                Confirmer mot de passe
                                <input 
                                    type='password'
                                    name='password_conf'
                                    placeholder="Retapez le mot de passe" 
                                    aria-invalid={errorRegister ? "true" : null}
                                    required 
                                />
                            </label>
                        </div>
                        <button aria-busy={registerIsLoading} type="submit"><i className="fa-solid fa-user-plus"></i> S'enregistrer</button>
                        <span>{errorRegister && errorRegister}</span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;