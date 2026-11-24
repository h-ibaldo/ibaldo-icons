import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipXVertical = forwardRef(function PaperclipXVertical(
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
    createElement(Path, {"d":"M14 9L14 16C14 19.313 11.313 22 8 22C4.688 22 2 19.313 2 16L2 6C2 3.789 3.789 2 6 2C8.211 2 10 3.789 10 6L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9","key":"0"}),
    createElement(Path, {"d":"M18 6L22 2","key":"1"}),
    createElement(Path, {"d":"M18 2L22 6","key":"2"})
  );
});

PaperclipXVertical.displayName = 'PaperclipXVertical';

export default PaperclipXVertical;
export { PaperclipXVertical };
