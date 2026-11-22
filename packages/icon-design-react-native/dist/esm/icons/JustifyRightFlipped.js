import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const JustifyRightFlipped = forwardRef(function JustifyRightFlipped(
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
    createElement(Path, {"d":"M22 22L22 2","key":"0"}),
    createElement(Path, {"d":"M7 16L3 16C2.449 16 2 15.551 2 15L2 9C2 8.449 2.449 8 3 8L7 8C7.551 8 8 8.449 8 9L8 15C8 15.551 7.551 16 7 16Z","key":"1"}),
    createElement(Path, {"d":"M17 18L13 18C12.449 18 12 17.551 12 17L12 7C12 6.449 12.449 6 13 6L17 6C17.551 6 18 6.449 18 7L18 17C18 17.551 17.551 18 17 18Z","key":"2"})
  );
});

JustifyRightFlipped.displayName = 'JustifyRightFlipped';

export default JustifyRightFlipped;
export { JustifyRightFlipped };
