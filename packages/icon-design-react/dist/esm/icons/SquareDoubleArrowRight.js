import { createElement, forwardRef } from 'react';

const SquareDoubleArrowRight = forwardRef(function SquareDoubleArrowRight(
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
    createElement('path', {"d":"M2.875 2L8.125 2C8.609 2 9 2.391 9 2.875L9 8.125C9 8.609 8.609 9 8.125 9L2.875 9C2.391 9 2 8.609 2 8.125L2 2.875C2 2.391 2.391 2 2.875 2Z","key":"0"}),
    createElement('path', {"d":"M15.875 2L21.125 2C21.609 2 22 2.391 22 2.875L22 8.125C22 8.609 21.609 9 21.125 9L15.875 9C15.391 9 15 8.609 15 8.125L15 2.875C15 2.391 15.391 2 15.875 2Z","key":"1"}),
    createElement('path', {"d":"M2 18L22 18","key":"2"}),
    createElement('path', {"d":"M18 22L22 18L18 14","key":"3"})
  );
});

SquareDoubleArrowRight.displayName = 'SquareDoubleArrowRight';

export default SquareDoubleArrowRight;
export { SquareDoubleArrowRight };
