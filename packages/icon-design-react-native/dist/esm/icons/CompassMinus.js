import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CompassMinus = forwardRef(function CompassMinus(
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
    createElement(Path, {"d":"M2 4L8 4","key":"0"}),
    createElement(Path, {"d":"M16 8L10 10L8 16L14 14Z","key":"1"}),
    createElement(Path, {"d":"M2.465 9C2.164 9.945 2 10.953 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2","key":"2"})
  );
});

CompassMinus.displayName = 'CompassMinus';

export default CompassMinus;
export { CompassMinus };
