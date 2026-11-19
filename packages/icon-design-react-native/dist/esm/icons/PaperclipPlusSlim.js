import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipPlusSlim = forwardRef(function PaperclipPlusSlim(
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
    createElement(Path, {"d":"M13 9L13 17C13 19.762 10.762 22 8 22C5.238 22 3 19.762 3 17L3 5.5C3 3.566 4.566 2 6.5 2C8.434 2 10 3.566 10 5.5L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9","key":"0"}),
    createElement(Path, {"d":"M21 5L15 5","key":"1"}),
    createElement(Path, {"d":"M18 2L18 8","key":"2"})
  );
});

PaperclipPlusSlim.displayName = 'PaperclipPlusSlim';

export default PaperclipPlusSlim;
export { PaperclipPlusSlim };
