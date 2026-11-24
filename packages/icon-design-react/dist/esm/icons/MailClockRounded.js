import { createElement, forwardRef } from 'react';

const MailClockRounded = forwardRef(function MailClockRounded(
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
    createElement('path', {"d":"M9 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 11","key":"0"}),
    createElement('path', {"d":"M6 6L11.359 10.465C11.73 10.777 12.27 10.777 12.641 10.465L18 6","key":"1"}),
    createElement('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"2"}),
    createElement('path', {"d":"M17 15L17 17L19 18","key":"3"})
  );
});

MailClockRounded.displayName = 'MailClockRounded';

export default MailClockRounded;
export { MailClockRounded };
