import { createElement, forwardRef } from 'react';

const WifiZero = forwardRef(function WifiZero(
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
    createElement('path', {"d":"M12 21L12 21","key":"0"})
  );
});

WifiZero.displayName = 'WifiZero';

export default WifiZero;
export { WifiZero };
