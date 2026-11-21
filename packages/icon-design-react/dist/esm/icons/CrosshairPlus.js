import { createElement, forwardRef } from 'react';

const CrosshairPlus = forwardRef(function CrosshairPlus(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M12 2L12 6","key":"1"}),
    createElement('path', {"d":"M12 18L12 22","key":"2"}),
    createElement('path', {"d":"M22 12L18 12","key":"3"}),
    createElement('path', {"d":"M14 12L10 12","key":"4"}),
    createElement('path', {"d":"M12 14L12 10","key":"5"}),
    createElement('path', {"d":"M6 12L2 12","key":"6"})
  );
});

CrosshairPlus.displayName = 'CrosshairPlus';

export default CrosshairPlus;
export { CrosshairPlus };
