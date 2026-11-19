import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CompassRose = forwardRef(function CompassRose(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M13.145 13.145L16 12L13.145 10.855L12 8L10.859 10.855L8 12L10.859 13.145L12 16Z","key":"1"}),
    createElement(Path, {"d":"M12 2L12 4","key":"2"}),
    createElement(Path, {"d":"M12 20L12 22","key":"3"}),
    createElement(Path, {"d":"M22 12L20 12","key":"4"}),
    createElement(Path, {"d":"M4 12L2 12","key":"5"}),
    createElement(Path, {"d":"M4.93 4.93L6.344 6.344","key":"6"}),
    createElement(Path, {"d":"M17.656 17.656L19.07 19.07","key":"7"}),
    createElement(Path, {"d":"M19.07 4.93L17.656 6.344","key":"8"}),
    createElement(Path, {"d":"M6.344 17.656L4.93 19.07","key":"9"})
  );
});

CompassRose.displayName = 'CompassRose';

export default CompassRose;
export { CompassRose };
