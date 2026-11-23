import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailClockFolds = forwardRef(function MailClockFolds(
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
    createElement(Path, {"d":"M9 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 11","key":"0"}),
    createElement(Path, {"d":"M2.367 2.242L12 11L21.633 2.242","key":"1"}),
    createElement(Path, {"d":"M9.801 9L2.367 15.758","key":"2"}),
    createElement(Path, {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"3"}),
    createElement(Path, {"d":"M17 15L17 17L19 18","key":"4"})
  );
});

MailClockFolds.displayName = 'MailClockFolds';

export default MailClockFolds;
export { MailClockFolds };
