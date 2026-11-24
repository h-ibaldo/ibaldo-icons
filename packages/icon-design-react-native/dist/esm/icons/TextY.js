import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextY = forwardRef(function TextY(
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
    createElement(Path, {"d":"M4 2L12 13L20 2","key":"0"}),
    createElement(Path, {"d":"M12 13L12 22","key":"1"})
  );
});

TextY.displayName = 'TextY';

export default TextY;
export { TextY };
