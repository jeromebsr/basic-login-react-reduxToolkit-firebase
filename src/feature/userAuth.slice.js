import { createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        userData: null,
        initialized: false,
    },
    reducers: {
        SET_INITIALIZED: (state, { payload }) => {
            state.initialized = payload;
        },

        LOGIN: (state, {payload}) => {
            state.userData = payload.user;
        },

        REGISTER: (state, {payload}) => {
            state.userData = payload.user;
        },

        LOGOUT: (state, action) => {
            state.userData = null;
        },
    },
});

// THUNKS 👇

export const setAuthListener = () => (dispatch, state) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            dispatch(LOGIN({ user: auth.currentUser.toJSON() }))
        }else {
            dispatch(LOGOUT())
        }
    }) 

    !state().users.initialized && dispatch(SET_INITIALIZED(true));
}

export const login = ({ email, password }) => async (dispatch, state) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password).then(() => {
        dispatch(LOGIN({ user: auth.currentUser.toJSON() }))
    })
    return state().users.userData;
}

export const register = ({ username, email, password }) => async (dispatch, state) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        updateProfile(auth.currentUser, {
            displayName: username
        }).then(() => {
            dispatch(REGISTER({ user: userCredential.user }))
        }).then(() => {
            sendEmailVerification(auth.currentUser)
        })
    })
}

export const logout = () => async (dispatch, state) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(LOGOUT());
}

// SELECTOR 👇

export const selectUser = (state) => {
    return state.users.userData;
}


// ACTIONS 👇

export const {SET_INITIALIZED, LOGIN, REGISTER, LOGOUT} = userAuthSlice.actions;
export default userAuthSlice.reducer;