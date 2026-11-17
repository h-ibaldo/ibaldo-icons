import { createElement, forwardRef } from 'react';

const AsteriskRefresh = forwardRef(function AsteriskRefresh(
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
    createElement('path', {"d":"M20 2L20 6L16 6","key":"0"}),
    createElement('path', {"d":"M19.984 6C18.16 3.574 15.27 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"1"}),
    createElement('path', {"d":"M12 8L12 16","key":"2"}),
    createElement('path', {"d":"M8.535 10L15.465 14","key":"3"}),
    createElement('path', {"d":"M8.535 14L15.465 10","key":"4"})
  );
});

AsteriskRefresh.displayName = 'AsteriskRefresh';

export default AsteriskRefresh;
export { AsteriskRefresh };
