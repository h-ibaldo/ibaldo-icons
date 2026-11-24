import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnRightFlipped = forwardRef(function ArrowUturnRightFlipped(
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
    createElement(Path, {"d":"M17 12L21 16L17 20","key":"0"}),
    createElement(Path, {"d":"M21 16L9 16C5.688 16 3 13.313 3 10C3 6.688 5.688 4 9 4L12 4","key":"1"})
  );
});

ArrowUturnRightFlipped.displayName = 'ArrowUturnRightFlipped';

export default ArrowUturnRightFlipped;
export { ArrowUturnRightFlipped };
