
// TODO: collision check

class FeatureCollection extends Collection {

  constructor (...args) {
    super(...args);
    this.tintCallback = () => {};
    this.zScaleCallback = () => {};
  }

  setTintCallback (tintCallback) {
    this.tintCallback = tintCallback;
    this.forEach(item => {
      item.applyTintAndZScale();
    });
  }

  setZScaleCallback (zScaleCallback) {
    this.zScaleCallback = zScaleCallback;
    this.forEach(item => {
      item.applyTintAndZScale();
    });
  }
}
