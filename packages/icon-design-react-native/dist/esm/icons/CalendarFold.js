import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarFold = forwardRef(function CalendarFold(
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
    createElement(Path, {"d":"M8 2L8 6","key":"0"}),
    createElement(Path, {"d":"M16 2L16 6","key":"1"}),
    createElement(Path, {"d":"M2 10L22 10","key":"2"}),
    createElement(Path, {"d":"M20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L13.758 22C14.555 22 15.316 21.684 15.879 21.121L21.121 15.879C21.684 15.316 22 14.555 22 13.758L22 6C22 4.895 21.105 4 20 4Z","key":"3"}),
    createElement(Path, {"d":"M15 21L15 17C15 15.895 15.895 15 17 15L21 15","key":"4"})
  );
});

CalendarFold.displayName = 'CalendarFold';

export default CalendarFold;
export { CalendarFold };
