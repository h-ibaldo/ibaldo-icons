import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PlugThick = forwardRef(function PlugThick(
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
    createElement(Path, {"d":"M6 8L18 8C18.551 8 19 8.449 19 9L19 13C19 15.762 16.762 18 14 18L10 18C7.238 18 5 15.762 5 13L5 9C5 8.449 5.449 8 6 8Z","key":"0"}),
    createElement(Path, {"d":"M7 8L7 3.5C7 2.672 7.672 2 8.5 2C9.328 2 10 2.672 10 3.5L10 8","key":"1"}),
    createElement(Path, {"d":"M14 8L14 3.5C14 2.672 14.672 2 15.5 2C16.328 2 17 2.672 17 3.5L17 8","key":"2"}),
    createElement(Path, {"d":"M10 18L10 22","key":"3"}),
    createElement(Path, {"d":"M14 18L14 22","key":"4"})
  );
});

PlugThick.displayName = 'PlugThick';

export default PlugThick;
export { PlugThick };
