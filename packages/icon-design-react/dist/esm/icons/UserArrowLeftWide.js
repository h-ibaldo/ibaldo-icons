import { createElement, forwardRef } from 'react';

const UserArrowLeftWide = forwardRef(function UserArrowLeftWide(
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
    createElement('path', {"d":"M21 19L14 19","key":"0"}),
    createElement('path', {"d":"M17 16L14 19L17 22","key":"1"}),
    createElement('path', {"d":"M6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6C14 8.211 12.211 10 10 10C7.789 10 6 8.211 6 6Z","key":"2"}),
    createElement('path', {"d":"M3 22L3 17C3 13.133 6.133 10 10 10","key":"3"}),
    createElement('path', {"d":"M15.293 12.418C14.008 10.938 12.113 10 10 10","key":"4"})
  );
});

UserArrowLeftWide.displayName = 'UserArrowLeftWide';

export default UserArrowLeftWide;
export { UserArrowLeftWide };
