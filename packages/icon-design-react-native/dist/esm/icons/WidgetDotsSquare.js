import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WidgetDotsSquare = forwardRef(function WidgetDotsSquare(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M8 22L8 10C8 8.895 8.895 8 10 8L22 8","key":"1"}),
    createElement(Path, {"d":"M8 14L22 14","key":"2"}),
    createElement(Path, {"d":"M11 11L11 11","key":"3"}),
    createElement(Path, {"d":"M14 11L14 11","key":"4"}),
    createElement(Path, {"d":"M17 11L17 11","key":"5"})
  );
});

WidgetDotsSquare.displayName = 'WidgetDotsSquare';

export default WidgetDotsSquare;
export { WidgetDotsSquare };
