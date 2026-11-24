import { createElement, forwardRef } from 'react';

const WifiMedium = forwardRef(function WifiMedium(
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
    createElement('path', {"d":"M5.59 11.852C9.492 9.383 14.508 9.383 18.41 11.852","key":"0"}),
    createElement('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"1"}),
    createElement('path', {"d":"M12 20L12 20","key":"2"})
  );
});

WifiMedium.displayName = 'WifiMedium';

export default WifiMedium;
export { WifiMedium };
