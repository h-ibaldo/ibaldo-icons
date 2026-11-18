import { createElement, forwardRef } from 'react';

const GaugeDrop = forwardRef(function GaugeDrop(
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
    createElement('path', {"d":"M12 6L9.598 11.609C9.227 12.469 9.348 13.461 9.906 14.211C10.953 15.605 13.047 15.605 14.094 14.211C14.652 13.461 14.773 12.469 14.402 11.609Z","key":"0"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"1"})
  );
});

GaugeDrop.displayName = 'GaugeDrop';

export default GaugeDrop;
export { GaugeDrop };
