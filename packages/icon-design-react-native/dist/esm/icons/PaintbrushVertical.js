import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaintbrushVertical = forwardRef(function PaintbrushVertical(
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
    createElement(Path, {"d":"M5 12L19 12L19 2L5 2Z","key":"0"}),
    createElement(Path, {"d":"M10 2L10 6","key":"1"}),
    createElement(Path, {"d":"M15 2L15 5","key":"2"}),
    createElement(Path, {"d":"M4 14L4 12L20 12L20 14C20 15.105 19.105 16 18 16L14 16L14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20L10 16L6 16C4.895 16 4 15.105 4 14Z","key":"3"})
  );
});

PaintbrushVertical.displayName = 'PaintbrushVertical';

export default PaintbrushVertical;
export { PaintbrushVertical };
