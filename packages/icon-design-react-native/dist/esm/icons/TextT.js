import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextT = forwardRef(function TextT(
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
    createElement(Path, {"d":"M4 2L20 2","key":"0"}),
    createElement(Path, {"d":"M12 22L12 2","key":"1"})
  );
});

TextT.displayName = 'TextT';

export default TextT;
export { TextT };
