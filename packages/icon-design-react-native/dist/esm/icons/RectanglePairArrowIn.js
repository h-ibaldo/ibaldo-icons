import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RectanglePairArrowIn = forwardRef(function RectanglePairArrowIn(
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
    createElement(Path, {"d":"M12 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L10 2C11.105 2 12 2.895 12 4Z","key":"0"}),
    createElement(Path, {"d":"M20 22L14 22C12.895 22 12 21.105 12 20L12 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22Z","key":"1"}),
    createElement(Path, {"d":"M2 9L8 9","key":"2"}),
    createElement(Path, {"d":"M6 7L8 9L6 11","key":"3"}),
    createElement(Path, {"d":"M22 15L16 15","key":"4"}),
    createElement(Path, {"d":"M18 17L16 15L18 13","key":"5"})
  );
});

RectanglePairArrowIn.displayName = 'RectanglePairArrowIn';

export default RectanglePairArrowIn;
export { RectanglePairArrowIn };
