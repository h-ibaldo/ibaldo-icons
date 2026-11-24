import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipBackCircle = forwardRef(function SkipBackCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M16.281 8.945L16.281 15.055C16.281 15.871 15.359 16.344 14.699 15.871L10.418 12.813C9.859 12.414 9.859 11.586 10.418 11.188L14.699 8.129C15.359 7.656 16.281 8.129 16.281 8.945Z","key":"1"}),
    createElement(Path, {"d":"M8 8L8 16","key":"2"})
  );
});

SkipBackCircle.displayName = 'SkipBackCircle';

export default SkipBackCircle;
export { SkipBackCircle };
