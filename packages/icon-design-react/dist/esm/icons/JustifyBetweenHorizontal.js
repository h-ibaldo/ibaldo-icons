import { createElement, forwardRef } from 'react';

const JustifyBetweenHorizontal = forwardRef(function JustifyBetweenHorizontal(
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
    createElement('path', {"d":"M12 2L12 22","key":"0"}),
    createElement('path', {"d":"M17 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L17 16C16.449 16 16 15.551 16 15L16 9C16 8.449 16.449 8 17 8Z","key":"1"}),
    createElement('path', {"d":"M3 6L7 6C7.551 6 8 6.449 8 7L8 17C8 17.551 7.551 18 7 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6Z","key":"2"})
  );
});

JustifyBetweenHorizontal.displayName = 'JustifyBetweenHorizontal';

export default JustifyBetweenHorizontal;
export { JustifyBetweenHorizontal };
