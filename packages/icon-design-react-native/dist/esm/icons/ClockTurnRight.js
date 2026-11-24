import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockTurnRight = forwardRef(function ClockTurnRight(
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
    createElement(Path, {"d":"M19 2L21 4L19 6","key":"0"}),
    createElement(Path, {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13","key":"1"}),
    createElement(Path, {"d":"M12 9L12 13L16 13","key":"2"}),
    createElement(Path, {"d":"M21 4L12 4","key":"3"})
  );
});

ClockTurnRight.displayName = 'ClockTurnRight';

export default ClockTurnRight;
export { ClockTurnRight };
