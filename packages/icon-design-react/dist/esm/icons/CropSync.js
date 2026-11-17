import { createElement, forwardRef } from 'react';

const CropSync = forwardRef(function CropSync(
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
    createElement('path', {"d":"M19 9L20.781 7.219","key":"0"}),
    createElement('path', {"d":"M7.219 20.781C8.637 21.559 10.27 22 12 22C17.523 22 22 17.523 22 12C22 10.266 21.559 8.637 20.781 7.219","key":"1"}),
    createElement('path', {"d":"M16.781 3.219C15.363 2.441 13.73 2 12 2C6.477 2 2 6.477 2 12C2 13.734 2.441 15.363 3.219 16.781","key":"2"}),
    createElement('path', {"d":"M3.219 16.781L5 15","key":"3"}),
    createElement('path', {"d":"M9 7L9 14C9 14.551 9.445 15 10 15L17 15","key":"4"}),
    createElement('path', {"d":"M15 12L15 10C15 9.449 14.555 9 14 9L12 9","key":"5"}),
    createElement('path', {"d":"M9 9L7 9","key":"6"}),
    createElement('path', {"d":"M15 17L15 15","key":"7"})
  );
});

CropSync.displayName = 'CropSync';

export default CropSync;
export { CropSync };
