import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UserThree = forwardRef(function UserThree(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M7 22C7 19.238 9.238 17 12 17C14.762 17 17 19.238 17 22","key":"0"}),
    createElement(Path, {"d":"M10 5C10 6.656 8.656 8 7 8C5.344 8 4 6.656 4 5C4 3.344 5.344 2 7 2C8.656 2 10 3.344 10 5Z","key":"1"}),
    createElement(Path, {"d":"M20 5C20 6.656 18.656 8 17 8C15.344 8 14 6.656 14 5C14 3.344 15.344 2 17 2C18.656 2 20 3.344 20 5Z","key":"2"}),
    createElement(Path, {"d":"M15 14C15 15.656 13.656 17 12 17C10.344 17 9 15.656 9 14C9 12.344 10.344 11 12 11C13.656 11 15 12.344 15 14Z","key":"3"}),
    createElement(Path, {"d":"M11.602 11.039C10.84 9.254 9.066 8 7 8C4.238 8 2 10.238 2 13","key":"4"}),
    createElement(Path, {"d":"M22 13C22 10.238 19.762 8 17 8C14.934 8 13.164 9.254 12.402 11.039","key":"5"})
  );
});

UserThree.displayName = 'UserThree';

export default UserThree;
export { UserThree };
