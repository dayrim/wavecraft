export default {
  isLogged: state => {
    if (state.userObject) return true;
    else return false;
  },
};
