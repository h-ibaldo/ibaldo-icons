import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextC = forwardRef(function TextC(
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
    createElement(Path, {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement(Path, {"d":"M17.199 20C15.875 21.281 14.117 22 12 22","key":"1"}),
    createElement(Path, {"d":"M12 2C14.617 2 16.684 3.094 18.063 5","key":"2"})
  );
});

TextC.displayName = 'TextC';

export default TextC;
export { TextC };
