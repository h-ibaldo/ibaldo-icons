import { createElement, forwardRef } from 'react';

const ClosedCaptionBare = forwardRef(function ClosedCaptionBare(
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
    createElement('path', {"d":"M10 8.023C9.16 7.391 8.133 7 7 7C4.238 7 2 9.238 2 12C2 14.762 4.238 17 7 17C8.133 17 9.16 16.609 10 15.977","key":"0"}),
    createElement('path', {"d":"M22 8.023C21.16 7.391 20.133 7 19 7C16.238 7 14 9.238 14 12C14 14.762 16.238 17 19 17C20.133 17 21.16 16.609 22 15.977","key":"1"})
  );
});

ClosedCaptionBare.displayName = 'ClosedCaptionBare';

export default ClosedCaptionBare;
export { ClosedCaptionBare };
