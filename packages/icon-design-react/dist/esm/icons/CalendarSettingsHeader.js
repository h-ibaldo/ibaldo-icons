import { createElement, forwardRef } from 'react';

const CalendarSettingsHeader = forwardRef(function CalendarSettingsHeader(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M20.5 17C20.5 18.934 18.934 20.5 17 20.5C15.066 20.5 13.5 18.934 13.5 17C13.5 15.066 15.066 13.5 17 13.5C18.934 13.5 20.5 15.066 20.5 17Z","key":"0"}),
    createElement('path', {"d":"M17 17.012L17 17","key":"1"}),
    createElement('path', {"d":"M17 12L17 13.5","key":"2"}),
    createElement('path', {"d":"M17 20.5L17 22","key":"3"}),
    createElement('path', {"d":"M22 17L20.5 17","key":"4"}),
    createElement('path', {"d":"M13.5 17L12 17","key":"5"}),
    createElement('path', {"d":"M20.535 20.535L19.477 19.477","key":"6"}),
    createElement('path', {"d":"M14.523 14.523L13.465 13.465","key":"7"}),
    createElement('path', {"d":"M13.465 20.535L14.523 19.477","key":"8"}),
    createElement('path', {"d":"M19.477 14.523L20.535 13.465","key":"9"}),
    createElement('path', {"d":"M11 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 11","key":"10"}),
    createElement('path', {"d":"M8 2L8 6","key":"11"}),
    createElement('path', {"d":"M16 2L16 6","key":"12"}),
    createElement('path', {"d":"M2 9L22 9","key":"13"})
  );
});

CalendarSettingsHeader.displayName = 'CalendarSettingsHeader';

export default CalendarSettingsHeader;
export { CalendarSettingsHeader };
