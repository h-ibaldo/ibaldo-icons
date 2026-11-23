import { createElement, forwardRef } from 'react';

const WifiLow = forwardRef(function WifiLow(
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
    createElement('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"0"}),
    createElement('path', {"d":"M12 20L12 20","key":"1"})
  );
});

WifiLow.displayName = 'WifiLow';

export default WifiLow;
export { WifiLow };
