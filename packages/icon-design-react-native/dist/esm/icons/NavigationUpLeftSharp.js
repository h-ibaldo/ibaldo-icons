import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const NavigationUpLeftSharp = forwardRef(function NavigationUpLeftSharp(
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
    createElement(Path, {"d":"M4 4L21 11L13 13L11 21Z","key":"0"})
  );
});

NavigationUpLeftSharp.displayName = 'NavigationUpLeftSharp';

export default NavigationUpLeftSharp;
export { NavigationUpLeftSharp };
