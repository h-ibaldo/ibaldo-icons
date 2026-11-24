import { createElement, forwardRef } from 'react';

const ClosedCaptionCircleWide = forwardRef(function ClosedCaptionCircleWide(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9","key":"1"}),
    createElement('path', {"d":"M17 15L16 15C14.344 15 13 13.656 13 12C13 10.344 14.344 9 16 9L17 9","key":"2"})
  );
});

ClosedCaptionCircleWide.displayName = 'ClosedCaptionCircleWide';

export default ClosedCaptionCircleWide;
export { ClosedCaptionCircleWide };
