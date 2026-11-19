import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownToDot = forwardRef(function ArrowDownToDot(
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
    createElement(Path, {"d":"M15 9L12 12L9 9","key":"0"}),
    createElement(Path, {"d":"M12 2L12 12","key":"1"}),
    createElement(Path, {"d":"M15 19C15 17.344 13.656 16 12 16C10.344 16 9 17.344 9 19C9 20.656 10.344 22 12 22C13.656 22 15 20.656 15 19Z","key":"2"})
  );
});

ArrowDownToDot.displayName = 'ArrowDownToDot';

export default ArrowDownToDot;
export { ArrowDownToDot };
