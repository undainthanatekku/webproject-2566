<template>
    <div class="login-container">
        <h1>Welcome to My App</h1>
        <p>Please sign in to continue</p>
        <button class="google-signin-btn" @click="signInWithGoogle">
            <img class="google" src="./assets/google.svg"/>

            Sign in with Google
        </button>
    </div>
</template>

<script>
import { signInWithGoogle } from '@/firebase/auth';

export default {
    methods: {
        async signInWithGoogle() {
            try {
                await signInWithGoogle();
            } catch (error) {
                console.error('Error signing in with Google:', error.message);
            }
        },
    },
};
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    margin-bottom: 20px;
}

.google-signin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4285f4;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.google-signin-btn:hover {
    background-color: #357ae8;
}

.google-logo {
    width: 20px;
    margin-right: 10px;
}
</style>