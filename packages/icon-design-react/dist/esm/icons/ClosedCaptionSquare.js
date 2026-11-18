import { createElement, forwardRef } from 'react';

const ClosedCaptionSquare = forwardRef(function ClosedCaptionSquare(
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
    createElement('path', {"d":"M17 15L16 15C14.895 15 14 14.105 14 13L14 11C14 9.895 14.895 9 16 9L17 9","key":"1"}),
    createElement('path', {"d":"M10 15L9 15C7.895 15 7 14.105 7 13L7 11C7 9.895 7.895 9 9 9L10 9","key":"2"})
  );
});

ClosedCaptionSquare.displayName = 'ClosedCaptionSquare';

export default ClosedCaptionSquare;
export { ClosedCaptionSquare };
