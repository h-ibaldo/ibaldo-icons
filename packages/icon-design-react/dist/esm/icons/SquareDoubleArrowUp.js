import { createElement, forwardRef } from 'react';

const SquareDoubleArrowUp = forwardRef(function SquareDoubleArrowUp(
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
    createElement('path', {"d":"M2 2.875L2 8.125C2 8.609 2.391 9 2.875 9L8.125 9C8.609 9 9 8.609 9 8.125L9 2.875C9 2.391 8.609 2 8.125 2L2.875 2C2.391 2 2 2.391 2 2.875Z","key":"0"}),
    createElement('path', {"d":"M2 15.875L2 21.125C2 21.609 2.391 22 2.875 22L8.125 22C8.609 22 9 21.609 9 21.125L9 15.875C9 15.391 8.609 15 8.125 15L2.875 15C2.391 15 2 15.391 2 15.875Z","key":"1"}),
    createElement('path', {"d":"M18 22L18 2","key":"2"}),
    createElement('path', {"d":"M14 6L18 2L22 6","key":"3"})
  );
});

SquareDoubleArrowUp.displayName = 'SquareDoubleArrowUp';

export default SquareDoubleArrowUp;
export { SquareDoubleArrowUp };
