import { createElement, forwardRef } from 'react';

const WifiLock = forwardRef(function WifiLock(
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
    createElement('path', {"d":"M2.387 7.777C5.738 5.656 9.645 4.75 13.465 5.059","key":"0"}),
    createElement('path', {"d":"M5.59 11.852C7.871 10.406 10.535 9.809 13.133 10.055","key":"1"}),
    createElement('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"2"}),
    createElement('path', {"d":"M22 6L16 6L16 11L22 11Z","key":"3"}),
    createElement('path', {"d":"M19 2C17.676 2 16.602 3.074 16.602 4.398L16.602 6L21.398 6L21.398 4.398C21.398 3.074 20.324 2 19 2Z","key":"4"}),
    createElement('path', {"d":"M12 20L12 20","key":"5"})
  );
});

WifiLock.displayName = 'WifiLock';

export default WifiLock;
export { WifiLock };
