import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopSquare = forwardRef(function StopSquare(
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
    createElement(Path, {"d":"M16 17L8 17C7.445 17 7 16.551 7 16L7 8C7 7.449 7.445 7 8 7L16 7C16.555 7 17 7.449 17 8L17 16C17 16.551 16.555 17 16 17Z","key":"0"}),
    createElement(Path, {"d":"M22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5Z","key":"1"})
  );
});

StopSquare.displayName = 'StopSquare';

export default StopSquare;
export { StopSquare };
