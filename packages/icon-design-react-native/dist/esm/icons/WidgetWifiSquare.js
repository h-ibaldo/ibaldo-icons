import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WidgetWifiSquare = forwardRef(function WidgetWifiSquare(
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
    createElement(Path, {"d":"M9 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 15","key":"0"}),
    createElement(Path, {"d":"M22 10C22 5.582 18.418 2 14 2","key":"1"}),
    createElement(Path, {"d":"M14 22L14 13C14 11.344 12.656 10 11 10L2 10","key":"2"}),
    createElement(Path, {"d":"M14 16L2 16","key":"3"}),
    createElement(Path, {"d":"M18 10C18 7.789 16.211 6 14 6","key":"4"})
  );
});

WidgetWifiSquare.displayName = 'WidgetWifiSquare';

export default WidgetWifiSquare;
export { WidgetWifiSquare };
