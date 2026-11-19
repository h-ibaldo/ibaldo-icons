import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownRightSquareIn = forwardRef(function ArrowDownRightSquareIn(
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
    createElement(Path, {"d":"M3.004 13.98L3.004 18.98C3.004 20.082 3.898 20.98 5.004 20.98L19.004 20.98C20.109 20.98 21.004 20.082 21.004 18.98L21.004 4.98C21.004 3.875 20.109 2.98 19.004 2.98L14.004 2.98","key":"0"}),
    createElement(Path, {"d":"M8.004 13.98L14.004 13.98L14.004 7.98","key":"1"}),
    createElement(Path, {"d":"M13.004 12.98L5.004 4.98","key":"2"})
  );
});

ArrowDownRightSquareIn.displayName = 'ArrowDownRightSquareIn';

export default ArrowDownRightSquareIn;
export { ArrowDownRightSquareIn };
