import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeLongTicks = forwardRef(function GaugeLongTicks(
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
    createElement(Path, {"d":"M17 7L10 14","key":"0"}),
    createElement(Path, {"d":"M13 12C13 11.445 12.555 11 12 11C11.445 11 11 11.445 11 12C11 12.555 11.445 13 12 13C12.555 13 13 12.555 13 12Z","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"}),
    createElement(Path, {"d":"M12 4L12 2","key":"3"}),
    createElement(Path, {"d":"M12 22L12 20","key":"4"}),
    createElement(Path, {"d":"M20 12L22 12","key":"5"}),
    createElement(Path, {"d":"M2 12L4 12","key":"6"}),
    createElement(Path, {"d":"M4.93 19.07L6.344 17.656","key":"7"}),
    createElement(Path, {"d":"M17.656 17.656L19.07 19.07","key":"8"}),
    createElement(Path, {"d":"M4.93 4.93L6.344 6.344","key":"9"})
  );
});

GaugeLongTicks.displayName = 'GaugeLongTicks';

export default GaugeLongTicks;
export { GaugeLongTicks };
