import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClosedCaptionCircle = forwardRef(function ClosedCaptionCircle(
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
    createElement(Path, {"d":"M10 15L9 15C7.895 15 7 14.105 7 13L7 11C7 9.895 7.895 9 9 9L10 9","key":"1"}),
    createElement(Path, {"d":"M17 15L16 15C14.895 15 14 14.105 14 13L14 11C14 9.895 14.895 9 16 9L17 9","key":"2"})
  );
});

ClosedCaptionCircle.displayName = 'ClosedCaptionCircle';

export default ClosedCaptionCircle;
export { ClosedCaptionCircle };
