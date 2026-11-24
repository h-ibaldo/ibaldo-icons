import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipCheckSlim = forwardRef(function PaperclipCheckSlim(
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
    createElement(Path, {"d":"M14 8L14 17C14 19.762 11.762 22 9 22C6.238 22 4 19.762 4 17L4 5.5C4 3.566 5.566 2 7.5 2C9.434 2 11 3.566 11 5.5L11 15C11 16.105 10.105 17 9 17C7.895 17 7 16.105 7 15L7 8","key":"0"}),
    createElement(Path, {"d":"M16 4L18 6L22 2","key":"1"})
  );
});

PaperclipCheckSlim.displayName = 'PaperclipCheckSlim';

export default PaperclipCheckSlim;
export { PaperclipCheckSlim };
