import reduxStore from './store';

export default (mapState) => ({
  data() {
    return {
      ...mapState(reduxStore.getState()),
    }
  },
  created() {
    reduxStore.subscribe(() => {
      const mappingState = mapState(reduxStore.getState());
      for (const key in mappingState) {
        this[key] = mappingState[key];
      }
    });
  }
});