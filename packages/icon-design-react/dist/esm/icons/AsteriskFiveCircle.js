import { createElement, forwardRef } from 'react';

const AsteriskFiveCircle = forwardRef(function AsteriskFiveCircle(
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
    createElement('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M12 11.91L12 6.992","key":"1"}),
    createElement('path', {"d":"M12 11.91L9.07 16.008","key":"2"}),
    createElement('path', {"d":"M12 11.91L7.262 10.438","key":"3"}),
    createElement('path', {"d":"M12 11.91L14.93 16.008","key":"4"}),
    createElement('path', {"d":"M12 11.91L16.738 10.438","key":"5"})
  );
});

AsteriskFiveCircle.displayName = 'AsteriskFiveCircle';

export default AsteriskFiveCircle;
export { AsteriskFiveCircle };
