import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipForwardDoubleThick = forwardRef(function SkipForwardDoubleThick(
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
    createElement(Path, {"d":"M21 19L19 19C18.449 19 18 18.551 18 18L18 6C18 5.449 18.449 5 19 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19Z","key":"0"}),
    createElement(Path, {"d":"M2 6.414L2 17.586C2 18.477 3.078 18.922 3.707 18.293L10 12L3.707 5.707C3.078 5.078 2 5.523 2 6.414Z","key":"1"}),
    createElement(Path, {"d":"M10 6.414L10 17.586C10 18.477 11.078 18.922 11.707 18.293L18 12L11.707 5.707C11.078 5.078 10 5.523 10 6.414Z","key":"2"})
  );
});

SkipForwardDoubleThick.displayName = 'SkipForwardDoubleThick';

export default SkipForwardDoubleThick;
export { SkipForwardDoubleThick };
