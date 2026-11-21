import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SlashCircle = forwardRef(function SlashCircle(
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
    createElement(Path, {"d":"M9 15L15 9","key":"0"}),
    createElement(Path, {"d":"M21 12C21 16.973 16.973 21 12 21C7.027 21 3 16.973 3 12C3 7.027 7.027 3 12 3C16.973 3 21 7.027 21 12Z","key":"1"})
  );
});

SlashCircle.displayName = 'SlashCircle';

export default SlashCircle;
export { SlashCircle };
