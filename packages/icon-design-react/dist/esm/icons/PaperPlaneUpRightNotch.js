import { createElement, forwardRef } from 'react';

const PaperPlaneUpRightNotch = forwardRef(function PaperPlaneUpRightNotch(
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
    createElement('path', {"d":"M3.762 10.566L10.105 13.383C10.332 13.484 10.516 13.668 10.613 13.895L13.434 20.238C13.801 21.063 14.992 21.016 15.293 20.16L20.773 4.5C21.051 3.711 20.289 2.949 19.5 3.227L3.84 8.707C2.984 9.008 2.938 10.199 3.762 10.566Z","key":"0"}),
    createElement('path', {"d":"M14.168 9.832L10.457 13.543","key":"1"})
  );
});

PaperPlaneUpRightNotch.displayName = 'PaperPlaneUpRightNotch';

export default PaperPlaneUpRightNotch;
export { PaperPlaneUpRightNotch };
