import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchPieDetached = forwardRef(function StopwatchPieDetached(
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
    createElement(Path, {"d":"M19.5 13.5C19.5 17.918 15.918 21.5 11.5 21.5C7.082 21.5 3.5 17.918 3.5 13.5C3.5 9.082 7.082 5.5 11.5 5.5C15.918 5.5 19.5 9.082 19.5 13.5Z","key":"0"}),
    createElement(Path, {"d":"M11.5 8.5C14.262 8.5 16.5 10.738 16.5 13.5","key":"1"}),
    createElement(Path, {"d":"M9.5 2.5L13.5 2.5","key":"2"}),
    createElement(Path, {"d":"M11.5 8.5L11.5 13.5L16.5 13.5","key":"3"}),
    createElement(Path, {"d":"M18.5 5.5L20.5 7.5","key":"4"})
  );
});

StopwatchPieDetached.displayName = 'StopwatchPieDetached';

export default StopwatchPieDetached;
export { StopwatchPieDetached };
