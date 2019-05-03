export default {
  isLogged: state => {
    if (state.email) return true;
    else return false;
  },
};
