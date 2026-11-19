import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Bomb = forwardRef(function Bomb(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M16 15C16 11.133 12.867 8 9 8C5.133 8 2 11.133 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15Z","key":"0"}),
    createElement(Path, {"d":"M14 10L16 8","key":"1"}),
    createElement(Path, {"d":"M19 5L21 3","key":"2"}),
    createElement(Path, {"d":"M14 2L15 4","key":"3"}),
    createElement(Path, {"d":"M20 9L22 10","key":"4"})
  );
});

Bomb.displayName = 'Bomb';

export default Bomb;
export { Bomb };
