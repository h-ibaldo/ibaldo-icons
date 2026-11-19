import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StepForwardCircle = forwardRef(function StepForwardCircle(
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
    createElement(Path, {"d":"M12 14.863L12 9.137C12 8.285 12.988 7.824 13.641 8.367L17.078 11.23C17.559 11.633 17.559 12.367 17.078 12.77L13.641 15.633C12.988 16.176 12 15.711 12 14.863Z","key":"1"}),
    createElement(Path, {"d":"M8 16L8 8","key":"2"})
  );
});

StepForwardCircle.displayName = 'StepForwardCircle';

export default StepForwardCircle;
export { StepForwardCircle };
