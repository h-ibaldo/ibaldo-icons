import { createElement, forwardRef } from 'react';

const Gauge = forwardRef(function Gauge(
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
    createElement('path', {"d":"M16 8L12 12","key":"0"}),
    createElement('path', {"d":"M11 12C11 11.445 11.445 11 12 11C12.555 11 13 11.445 13 12C13 12.555 12.555 13 12 13C11.445 13 11 12.555 11 12Z","key":"1"}),
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"2"})
  );
});

Gauge.displayName = 'Gauge';

export default Gauge;
export { Gauge };
