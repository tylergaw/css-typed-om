/**
 * In browsers, CSSStyleDeclaration will be available so we can use props and
 * methods of it, but in our non-browser tests, it won't exist so we need to
 * to mock just the parts we need.
 */
export default class MockCSSStyleDeclaration {
  constructor(styles) {
    const props = Object.keys(styles);
    this.props = props;
    this.styles = props.reduce((obj, key) => {
      obj[key] = styles[key];
      return obj;
    }, {});
  }

  get length() {
    return this.props.length;
  }

  item(index) {
    return this.props[index];
  }

  getPropertyValue(propertyName) {
    return this.styles[propertyName];
  }
}
