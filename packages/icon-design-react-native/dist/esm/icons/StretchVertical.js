import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StretchVertical = forwardRef(function StretchVertical(
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
    createElement(Path, {"d":"M22 4L22 20C22 21.105 21.105 22 20 22L17 22C15.895 22 15 21.105 15 20L15 4C15 2.895 15.895 2 17 2L20 2C21.105 2 22 2.895 22 4Z","key":"0"}),
    createElement(Path, {"d":"M9 4L9 20C9 21.105 8.105 22 7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L7 2C8.105 2 9 2.895 9 4Z","key":"1"})
  );
});

StretchVertical.displayName = 'StretchVertical';

export default StretchVertical;
export { StretchVertical };
