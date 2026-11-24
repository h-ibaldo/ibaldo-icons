import { createElement, forwardRef } from 'react';

const Equals = forwardRef(function Equals(
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
    createElement('path', {"d":"M6 9L18 9","key":"0"}),
    createElement('path', {"d":"M6 15L18 15","key":"1"})
  );
});

Equals.displayName = 'Equals';

export default Equals;
export { Equals };
