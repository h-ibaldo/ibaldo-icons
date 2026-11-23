import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Eraser = forwardRef(function Eraser(
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
    createElement(Path, {"d":"M15 3L3 15L9 21L21 9Z","key":"0"}),
    createElement(Path, {"d":"M7 11L13 17","key":"1"}),
    createElement(Path, {"d":"M3 21L20 21","key":"2"})
  );
});

Eraser.displayName = 'Eraser';

export default Eraser;
export { Eraser };
