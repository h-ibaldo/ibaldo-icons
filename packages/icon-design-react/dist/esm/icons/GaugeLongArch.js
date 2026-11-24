import { createElement, forwardRef } from 'react';

const GaugeLongArch = forwardRef(function GaugeLongArch(
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
    createElement('path', {"d":"M19 14L18 14","key":"0"}),
    createElement('path', {"d":"M6 14L5 14","key":"1"}),
    createElement('path', {"d":"M7.758 18.242L7.051 18.949","key":"2"}),
    createElement('path', {"d":"M7.051 9.051L7.758 9.758","key":"3"}),
    createElement('path', {"d":"M16.242 18.242L16.949 18.949","key":"4"}),
    createElement('path', {"d":"M12 7L12 8","key":"5"}),
    createElement('path', {"d":"M19.984 20C21.246 18.328 22 16.254 22 14C22 8.477 17.523 4 12 4C6.477 4 2 8.477 2 14C2 16.254 2.754 18.328 4.012 20","key":"6"}),
    createElement('path', {"d":"M10 14C10 12.895 10.895 12 12 12C13.105 12 14 12.895 14 14C14 15.105 13.105 16 12 16C10.895 16 10 15.105 10 14Z","key":"7"}),
    createElement('path', {"d":"M19 7L13.414 12.586","key":"8"})
  );
});

GaugeLongArch.displayName = 'GaugeLongArch';

export default GaugeLongArch;
export { GaugeLongArch };
