import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarCandle = forwardRef(function CalendarCandle(
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
    createElement(Path, {"d":"M8 2L8 5","key":"0"}),
    createElement(Path, {"d":"M16 2L16 5","key":"1"}),
    createElement(Path, {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 5C2 3.895 2.895 3 4 3L20 3C21.105 3 22 3.895 22 5L22 20C22 21.105 21.105 22 20 22L14 22","key":"2"}),
    createElement(Path, {"d":"M14 22L14 17L10 17L10 22","key":"3"}),
    createElement(Path, {"d":"M13.688 13.313L13.684 13.316C12.754 14.246 11.246 14.246 10.316 13.316L10.313 13.313C9.543 12.543 9.395 11.344 9.957 10.406L12 7L14.043 10.406C14.605 11.344 14.457 12.543 13.688 13.313Z","key":"4"}),
    createElement(Path, {"d":"M12 15L12 17","key":"5"})
  );
});

CalendarCandle.displayName = 'CalendarCandle';

export default CalendarCandle;
export { CalendarCandle };
