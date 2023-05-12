const requireAuth = (store) => (next) => (action) => {
    const state = store.getState();
    if (!state.auth.isAuthenticated) {
        // Redirect to login page
        History.push('/sign-in');
    } else {
        return next(action);
    }
};

export default requireAuth;