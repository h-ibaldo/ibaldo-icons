import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightFromBar = forwardRef(function ArrowRightFromBar(
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
    createElement(Path, {"d":"M17 8L21 12L17 16","key":"0"}),
    createElement(Path, {"d":"M3 17L3 7","key":"1"}),
    createElement(Path, {"d":"M21 12L3 12","key":"2"})
  );
});

ArrowRightFromBar.displayName = 'ArrowRightFromBar';

export default ArrowRightFromBar;
export { ArrowRightFromBar };
