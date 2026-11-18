import { createElement, forwardRef } from 'react';

const SkipForward = forwardRef(function SkipForward(
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
    createElement('path', {"d":"M3 4.918L3 19.082C3 20.32 4.371 21.063 5.41 20.391L16.293 13.309C17.234 12.691 17.234 11.309 16.293 10.691L5.41 3.609C4.371 2.938 3 3.68 3 4.918Z","key":"0"}),
    createElement('path', {"d":"M21 4L21 20","key":"1"})
  );
});

SkipForward.displayName = 'SkipForward';

export default SkipForward;
export { SkipForward };
