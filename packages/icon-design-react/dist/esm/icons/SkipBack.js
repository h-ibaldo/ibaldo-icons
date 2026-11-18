import { createElement, forwardRef } from 'react';

const SkipBack = forwardRef(function SkipBack(
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
    createElement('path', {"d":"M21 4.918L21 19.082C21 20.32 19.629 21.063 18.59 20.391L7.707 13.309C6.766 12.691 6.766 11.309 7.707 10.691L18.59 3.609C19.629 2.938 21 3.68 21 4.918Z","key":"0"}),
    createElement('path', {"d":"M3 4L3 20","key":"1"})
  );
});

SkipBack.displayName = 'SkipBack';

export default SkipBack;
export { SkipBack };
