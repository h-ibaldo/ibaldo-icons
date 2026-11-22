import { createElement, forwardRef } from 'react';

const JustifyLeft = forwardRef(function JustifyLeft(
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
    createElement('path', {"d":"M2 2L2 22","key":"0"}),
    createElement('path', {"d":"M17 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L17 16C16.449 16 16 15.551 16 15L16 9C16 8.449 16.449 8 17 8Z","key":"1"}),
    createElement('path', {"d":"M7 6L11 6C11.551 6 12 6.449 12 7L12 17C12 17.551 11.551 18 11 18L7 18C6.449 18 6 17.551 6 17L6 7C6 6.449 6.449 6 7 6Z","key":"2"})
  );
});

JustifyLeft.displayName = 'JustifyLeft';

export default JustifyLeft;
export { JustifyLeft };
