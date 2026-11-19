import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareEditMinus = forwardRef(function SquareEditMinus(
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
    createElement(Path, {"d":"M21.707 12.879L20.121 11.293C19.728 10.899 19.089 10.903 18.7 11.301L11 19L11 22L14 22L21.715 14.285C22.098 13.893 22.095 13.266 21.707 12.879Z","key":"0"}),
    createElement(Path, {"d":"M7 18L5 18C3.895 18 3 17.105 3 16L3 4C3 2.895 3.895 2 5 2L17 2C18.105 2 19 2.895 19 4L19 7","key":"1"}),
    createElement(Path, {"d":"M14 10L8 10","key":"2"})
  );
});

SquareEditMinus.displayName = 'SquareEditMinus';

export default SquareEditMinus;
export { SquareEditMinus };
