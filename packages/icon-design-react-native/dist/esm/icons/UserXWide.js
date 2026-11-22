import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UserXWide = forwardRef(function UserXWide(
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
    createElement(Path, {"d":"M7 7C7 4.238 9.238 2 12 2C14.762 2 17 4.238 17 7C17 9.762 14.762 12 12 12C9.238 12 7 9.762 7 7Z","key":"0"}),
    createElement(Path, {"d":"M3 22L3 21C3 16.031 7.031 12 12 12C14.492 12 16.75 13.016 18.379 14.652","key":"1"}),
    createElement(Path, {"d":"M17 22L21 18","key":"2"}),
    createElement(Path, {"d":"M21 22L17 18","key":"3"})
  );
});

UserXWide.displayName = 'UserXWide';

export default UserXWide;
export { UserXWide };
