import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarSearchDotted = forwardRef(function CalendarSearchDotted(
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
    createElement(Path, {"d":"M12 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 12","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M2 9L22 9","key":"3"}),
    createElement(Path, {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z","key":"4"}),
    createElement(Path, {"d":"M22 22L20 20","key":"5"}),
    createElement(Path, {"d":"M6 14L6 14","key":"6"}),
    createElement(Path, {"d":"M10 14L10 14","key":"7"}),
    createElement(Path, {"d":"M6 18L6 18","key":"8"}),
    createElement(Path, {"d":"M10 18L10 18","key":"9"})
  );
});

CalendarSearchDotted.displayName = 'CalendarSearchDotted';

export default CalendarSearchDotted;
export { CalendarSearchDotted };
