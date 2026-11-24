import { createElement, forwardRef } from 'react';

const FolderUser = forwardRef(function FolderUser(
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
    createElement('path', {"d":"M11 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 11","key":"0"}),
    createElement('path', {"d":"M20.5 15.5C20.5 16.883 19.383 18 18 18C16.617 18 15.5 16.883 15.5 15.5C15.5 14.117 16.617 13 18 13C19.383 13 20.5 14.117 20.5 15.5Z","key":"1"}),
    createElement('path', {"d":"M22 21C22 19.344 20.656 18 19 18L17 18C15.344 18 14 19.344 14 21","key":"2"})
  );
});

FolderUser.displayName = 'FolderUser';

export default FolderUser;
export { FolderUser };
