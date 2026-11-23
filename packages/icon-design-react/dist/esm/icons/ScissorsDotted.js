import { createElement, forwardRef } from 'react';

const ScissorsDotted = forwardRef(function ScissorsDotted(
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
    createElement('path', {"d":"M7.598 7.602C6.77 9.07 4.934 9.574 3.5 8.727C2.066 7.879 1.574 6.004 2.402 4.535C3.23 3.066 5.066 2.563 6.5 3.41C7.934 4.258 8.426 6.137 7.598 7.602Z","key":"0"}),
    createElement('path', {"d":"M7.598 16.398C6.77 14.93 4.934 14.426 3.5 15.273C2.066 16.121 1.574 17.996 2.402 19.465C3.23 20.934 5.066 21.438 6.5 20.59C7.934 19.742 8.426 17.863 7.598 16.398Z","key":"1"}),
    createElement('path', {"d":"M3.5 15.273L19.09 6.07","key":"2"}),
    createElement('path', {"d":"M19.09 17.93L12.027 13.762","key":"3"}),
    createElement('path', {"d":"M9.043 12L3.5 8.727","key":"4"}),
    createElement('path', {"d":"M16 12L16 12","key":"5"}),
    createElement('path', {"d":"M19 12L19 12","key":"6"}),
    createElement('path', {"d":"M22 12L22 12","key":"7"})
  );
});

ScissorsDotted.displayName = 'ScissorsDotted';

export default ScissorsDotted;
export { ScissorsDotted };
