import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Divide = forwardRef(function Divide(
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
    createElement(Path, {"d":"M13 6C13 6.555 12.551 7 12 7C11.449 7 11 6.555 11 6C11 5.445 11.449 5 12 5C12.551 5 13 5.445 13 6Z","key":"0"}),
    createElement(Path, {"d":"M13 18C13 18.555 12.551 19 12 19C11.449 19 11 18.555 11 18C11 17.445 11.449 17 12 17C12.551 17 13 17.445 13 18Z","key":"1"}),
    createElement(Path, {"d":"M5 12L19 12","key":"2"})
  );
});

Divide.displayName = 'Divide';

export default Divide;
export { Divide };
