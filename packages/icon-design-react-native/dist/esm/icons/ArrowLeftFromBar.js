import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftFromBar = forwardRef(function ArrowLeftFromBar(
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
    createElement(Path, {"d":"M7 16L3 12L7 8","key":"0"}),
    createElement(Path, {"d":"M21 7L21 17","key":"1"}),
    createElement(Path, {"d":"M3 12L21 12","key":"2"})
  );
});

ArrowLeftFromBar.displayName = 'ArrowLeftFromBar';

export default ArrowLeftFromBar;
export { ArrowLeftFromBar };
