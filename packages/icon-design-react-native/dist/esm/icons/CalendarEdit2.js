import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarEdit2 = forwardRef(function CalendarEdit2(
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
    createElement(Path, {"d":"M2.172 10L10.172 10","key":"0"}),
    createElement(Path, {"d":"M16.172 9L20.172 13","key":"1"}),
    createElement(Path, {"d":"M7.172 2L7.172 6","key":"2"}),
    createElement(Path, {"d":"M15.172 2L15.172 4","key":"3"}),
    createElement(Path, {"d":"M18.172 4L4.172 4C3.066 4 2.172 4.895 2.172 6L2.172 20C2.172 21.105 3.066 22 4.172 22L18.172 22C19.277 22 20.172 21.105 20.172 20L20.172 18","key":"4"}),
    createElement(Path, {"d":"M11.172 14L11.172 18L15.172 18L21.172 12C22.277 10.895 22.277 9.105 21.172 8C20.066 6.895 18.277 6.895 17.172 8Z","key":"5"})
  );
});

CalendarEdit2.displayName = 'CalendarEdit2';

export default CalendarEdit2;
export { CalendarEdit2 };
