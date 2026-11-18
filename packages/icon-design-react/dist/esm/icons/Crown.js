import { createElement, forwardRef } from 'react';

const Crown = forwardRef(function Crown(
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
    createElement('path', {"d":"M3 18L3 7L8 11L12 6L16 11L21 7L21 18Z","key":"0"})
  );
});

Crown.displayName = 'Crown';

export default Crown;
export { Crown };
