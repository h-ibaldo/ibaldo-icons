import { createElement, forwardRef } from 'react';

const KeyboardOff = forwardRef(function KeyboardOff(
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
    createElement('path', {"d":"M15 16L9 16","key":"0"}),
    createElement('path', {"d":"M18.398 20L3 20C2.449 20 2 19.551 2 19L2 5C2 4.449 2.449 4 3 4L5.602 4","key":"1"}),
    createElement('path', {"d":"M11.602 4L21 4C21.551 4 22 4.449 22 5L22 17","key":"2"}),
    createElement('path', {"d":"M20 22L4 2","key":"3"}),
    createElement('path', {"d":"M6 8L6 8","key":"4"}),
    createElement('path', {"d":"M10 8L10 8","key":"5"}),
    createElement('path', {"d":"M14 8L14 8","key":"6"}),
    createElement('path', {"d":"M18 8L18 8","key":"7"}),
    createElement('path', {"d":"M6 12L6 12","key":"8"}),
    createElement('path', {"d":"M10 12L10 12","key":"9"}),
    createElement('path', {"d":"M14 12L14 12","key":"10"}),
    createElement('path', {"d":"M18 12L18 12","key":"11"}),
    createElement('path', {"d":"M18 16L18 16","key":"12"}),
    createElement('path', {"d":"M6 16L6 16","key":"13"})
  );
});

KeyboardOff.displayName = 'KeyboardOff';

export default KeyboardOff;
export { KeyboardOff };
