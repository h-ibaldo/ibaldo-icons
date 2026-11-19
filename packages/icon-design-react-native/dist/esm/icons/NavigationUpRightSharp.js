import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const NavigationUpRightSharp = forwardRef(function NavigationUpRightSharp(
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
    createElement(Path, {"d":"M20 4L3 11L11 13L13 21Z","key":"0"})
  );
});

NavigationUpRightSharp.displayName = 'NavigationUpRightSharp';

export default NavigationUpRightSharp;
export { NavigationUpRightSharp };
