function ProtectedRoute({ children }) {
  // 1. Load the authenticated user

  // 2. While loading, show the spinner

  // 3. If user IS NOT authenticated, redirect to the /login

  // 4. If user IS authenticated render the app
  return children;
}

export default ProtectedRoute;
