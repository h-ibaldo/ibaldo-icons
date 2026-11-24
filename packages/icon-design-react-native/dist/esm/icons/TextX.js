import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextX = forwardRef(function TextX(
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
    createElement(Path, {"d":"M5 2L19 22","key":"0"}),
    createElement(Path, {"d":"M19 2L5 22","key":"1"})
  );
});

TextX.displayName = 'TextX';

export default TextX;
export { TextX };
