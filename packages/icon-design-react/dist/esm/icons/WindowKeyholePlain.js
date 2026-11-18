import { createElement, forwardRef } from 'react';

const WindowKeyholePlain = forwardRef(function WindowKeyholePlain(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M12 18L12 14","key":"2"}),
    createElement('path', {"d":"M13 13C13 13.551 12.551 14 12 14C11.449 14 11 13.551 11 13C11 12.449 11.449 12 12 12C12.551 12 13 12.449 13 13Z","key":"3"})
  );
});

WindowKeyholePlain.displayName = 'WindowKeyholePlain';

export default WindowKeyholePlain;
export { WindowKeyholePlain };
