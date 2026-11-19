import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarSettings = forwardRef(function CalendarSettings(
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
    createElement(Path, {"d":"M21 7L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L6 21","key":"2"}),
    createElement(Path, {"d":"M15.5 16C15.223 16 15 15.777 15 15.5C15 15.223 15.223 15 15.5 15C15.777 15 16 15.223 16 15.5C16 15.777 15.777 16 15.5 16Z","key":"3"}),
    createElement(Path, {"d":"M15.5 20C13.016 20 11 17.984 11 15.5C11 13.016 13.016 11 15.5 11C17.984 11 20 13.016 20 15.5C20 17.984 17.984 20 15.5 20Z","key":"4"}),
    createElement(Path, {"d":"M14.27 19.809L15 22L16 22L16.73 19.809","key":"5"}),
    createElement(Path, {"d":"M16.73 11.191L16 9L15 9L14.27 11.191","key":"6"}),
    createElement(Path, {"d":"M18.617 18.719L20.879 19.184L21.379 18.316L19.848 16.586","key":"7"}),
    createElement(Path, {"d":"M12.383 12.281L10.121 11.816L9.621 12.684L11.152 14.414","key":"8"}),
    createElement(Path, {"d":"M19.848 14.41L21.379 12.684L20.879 11.816L18.617 12.281","key":"9"}),
    createElement(Path, {"d":"M11.152 16.59L9.621 18.316L10.121 19.184L12.383 18.719","key":"10"})
  );
});

CalendarSettings.displayName = 'CalendarSettings';

export default CalendarSettings;
export { CalendarSettings };
