import { createElement, forwardRef } from 'react';

const ClosedCaptionSquareWide = forwardRef(function ClosedCaptionSquareWide(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9","key":"1"}),
    createElement('path', {"d":"M17 15L16 15C14.344 15 13 13.656 13 12C13 10.344 14.344 9 16 9L17 9","key":"2"})
  );
});

ClosedCaptionSquareWide.displayName = 'ClosedCaptionSquareWide';

export default ClosedCaptionSquareWide;
export { ClosedCaptionSquareWide };
