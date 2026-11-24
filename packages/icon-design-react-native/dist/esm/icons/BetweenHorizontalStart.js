import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BetweenHorizontalStart = forwardRef(function BetweenHorizontalStart(
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
    createElement(Path, {"d":"M3 8L7.242 12.242L3 16.484","key":"0"}),
    createElement(Path, {"d":"M11 2L21 2L21 10L11 10Z","key":"1"}),
    createElement(Path, {"d":"M11 14L21 14L21 22L11 22Z","key":"2"})
  );
});

BetweenHorizontalStart.displayName = 'BetweenHorizontalStart';

export default BetweenHorizontalStart;
export { BetweenHorizontalStart };
