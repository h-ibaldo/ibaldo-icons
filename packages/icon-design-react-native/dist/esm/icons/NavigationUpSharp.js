import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const NavigationUpSharp = forwardRef(function NavigationUpSharp(
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
    createElement(Path, {"d":"M19 20L12.07 16L5 20L12 3Z","key":"0"})
  );
});

NavigationUpSharp.displayName = 'NavigationUpSharp';

export default NavigationUpSharp;
export { NavigationUpSharp };
