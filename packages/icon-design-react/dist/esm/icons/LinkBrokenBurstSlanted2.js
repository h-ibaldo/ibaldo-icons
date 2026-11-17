import { createElement, forwardRef } from 'react';

const LinkBrokenBurstSlanted2 = forwardRef(function LinkBrokenBurstSlanted2(
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
    createElement('path', {"d":"M8 11.773C6.914 11.766 5.828 12.172 5 13L3.242 14.758C1.586 16.414 1.586 19.098 3.242 20.754L3.246 20.758C4.902 22.414 7.586 22.414 9.242 20.758L11 19C11.828 18.172 12.234 17.086 12.227 16","key":"0"}),
    createElement('path', {"d":"M16 12.227C17.086 12.234 18.172 11.828 19 11L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L13 5C12.172 5.828 11.766 6.914 11.773 8","key":"1"}),
    createElement('path', {"d":"M4 9L2 9","key":"2"}),
    createElement('path', {"d":"M5.465 5.465L4.051 4.051","key":"3"}),
    createElement('path', {"d":"M9 4L9 2","key":"4"}),
    createElement('path', {"d":"M20 15L22 15","key":"5"}),
    createElement('path', {"d":"M18.535 18.535L19.949 19.949","key":"6"}),
    createElement('path', {"d":"M15 20L15 22","key":"7"})
  );
});

LinkBrokenBurstSlanted2.displayName = 'LinkBrokenBurstSlanted2';

export default LinkBrokenBurstSlanted2;
export { LinkBrokenBurstSlanted2 };
