import { createElement, forwardRef } from 'react';

const MobileBoltNotch = forwardRef(function MobileBoltNotch(
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
    createElement('path', {"d":"M16 22L8 22C6.895 22 6 21.105 6 20L6 4C6 2.895 6.895 2 8 2L16 2C17.105 2 18 2.895 18 4L18 20C18 21.105 17.105 22 16 22Z","key":"0"}),
    createElement('path', {"d":"M11 5L13 5","key":"1"}),
    createElement('path', {"d":"M13 9L10 13L14 13L11 17","key":"2"})
  );
});

MobileBoltNotch.displayName = 'MobileBoltNotch';

export default MobileBoltNotch;
export { MobileBoltNotch };
