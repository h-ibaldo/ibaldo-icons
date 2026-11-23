import { createElement, forwardRef } from 'react';

const WifiSync = forwardRef(function WifiSync(
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
    createElement('path', {"d":"M22 2L22 5L19 5","key":"0"}),
    createElement('path', {"d":"M12 12L12 9L15 9","key":"1"}),
    createElement('path', {"d":"M21.578 9C20.805 10.766 19.051 12 17 12C14.949 12 13.195 10.766 12.422 9","key":"2"}),
    createElement('path', {"d":"M12.43 5C13.203 3.238 14.953 2 17 2C19.051 2 20.805 3.234 21.578 5","key":"3"}),
    createElement('path', {"d":"M2.387 7.777C4.457 6.465 6.742 5.617 9.086 5.238","key":"4"}),
    createElement('path', {"d":"M5.59 11.852C6.641 11.188 7.773 10.703 8.941 10.395","key":"5"}),
    createElement('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"6"}),
    createElement('path', {"d":"M12 20L12 20","key":"7"})
  );
});

WifiSync.displayName = 'WifiSync';

export default WifiSync;
export { WifiSync };
