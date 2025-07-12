// auth.js - Shared authentication functions

function isAuthenticated() {
    return localStorage.getItem('access_token') !== null;
}

function getAuthToken() {
    return localStorage.getItem('access_token');
}

// Redirect to login if not authenticated
function checkAuth() {
    if (!isAuthenticated() && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
    }
}

// Call checkAuth when the script loads
checkAuth();