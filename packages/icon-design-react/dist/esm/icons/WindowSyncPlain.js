import { createElement, forwardRef } from 'react';

const WindowSyncPlain = forwardRef(function WindowSyncPlain(
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
    createElement('path', {"d":"M16 15L17 13","key":"2"}),
    createElement('path', {"d":"M7 17L8 15","key":"3"}),
    createElement('path', {"d":"M8 15C8 17.211 9.789 19 12 19C13.008 19 13.918 18.613 14.621 18","key":"4"}),
    createElement('path', {"d":"M16 15C16 12.789 14.211 11 12 11C10.992 11 10.082 11.387 9.379 12","key":"5"})
  );
});

WindowSyncPlain.displayName = 'WindowSyncPlain';

export default WindowSyncPlain;
export { WindowSyncPlain };
