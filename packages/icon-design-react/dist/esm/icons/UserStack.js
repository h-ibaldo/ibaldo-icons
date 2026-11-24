import { createElement, forwardRef } from 'react';

const UserStack = forwardRef(function UserStack(
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
    createElement('path', {"d":"M17 22L17 19C17 16.238 14.762 14 12 14C9.238 14 7 16.238 7 19L7 22M12 14C9.789 14 8 12.211 8 10C8 7.793 9.789 6 12 6C14.207 6 16 7.793 16 10C16 12.211 14.207 14 12 14Z","key":"0"}),
    createElement('path', {"d":"M10.984 6.148C10.988 6.098 11 6.051 11 6C11 3.793 9.211 2 7 2C4.789 2 3 3.793 3 6C3 8.211 4.789 10 7 10C7.352 10 7.688 9.941 8.016 9.855","key":"1"}),
    createElement('path', {"d":"M8.012 10.102C7.684 10.035 7.348 10 7 10C4.238 10 2 12.238 2 15L2 18","key":"2"}),
    createElement('path', {"d":"M13.016 6.145C13.012 6.098 13 6.051 13 6C13 3.793 14.789 2 17 2C19.207 2 21 3.793 21 6C21 8.211 19.207 10 17 10C16.645 10 16.309 9.941 15.984 9.855","key":"3"}),
    createElement('path', {"d":"M15.988 10.102C16.316 10.035 16.652 10 17 10C19.762 10 22 12.238 22 15L22 18","key":"4"})
  );
});

UserStack.displayName = 'UserStack';

export default UserStack;
export { UserStack };
