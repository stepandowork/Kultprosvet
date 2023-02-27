import transparentColor from './transparentColor';

const Colors = {
  green: '#27ae60',
  lightGreen: '#2ecc71',
};

const TransparentColors = {
  background: transparentColor(Colors.green, 20),
  placeholder: transparentColor(Colors.green, 50),
  card: transparentColor(Colors.green, 20),
  cardTitle: transparentColor(Colors.green, 40),
  text: transparentColor(Colors.green, 90),
  border: transparentColor(Colors.green, 70),
};

export {TransparentColors};

export default Colors;
