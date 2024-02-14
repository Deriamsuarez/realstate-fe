export const logout = () => {
    localStorage.clear();
    window.location.href = window.location.origin;
  };
  
  const useLogout = () => logout;
  
  export default useLogout;