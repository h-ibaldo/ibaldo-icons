import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownFromDot = forwardRef(function ArrowDownFromDot(
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
    createElement(Path, {"d":"M15 19L12 22L9 19","key":"0"}),
    createElement(Path, {"d":"M12 12L12 22","key":"1"}),
    createElement(Path, {"d":"M9 5C9 6.656 10.344 8 12 8C13.656 8 15 6.656 15 5C15 3.344 13.656 2 12 2C10.344 2 9 3.344 9 5Z","key":"2"})
  );
});

ArrowDownFromDot.displayName = 'ArrowDownFromDot';

export default ArrowDownFromDot;
export { ArrowDownFromDot };
