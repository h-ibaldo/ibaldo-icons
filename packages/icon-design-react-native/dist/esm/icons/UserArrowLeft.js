import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UserArrowLeft = forwardRef(function UserArrowLeft(
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
    createElement(Path, {"d":"M7 6C7 3.789 8.789 2 11 2C13.211 2 15 3.789 15 6C15 8.211 13.211 10 11 10C8.789 10 7 8.211 7 6Z","key":"0"}),
    createElement(Path, {"d":"M3 22L3 19C3 15.688 5.688 13 9 13L13 13C13.801 13 14.563 13.156 15.262 13.441","key":"1"}),
    createElement(Path, {"d":"M21 19L14 19","key":"2"}),
    createElement(Path, {"d":"M17 16L14 19L17 22","key":"3"})
  );
});

UserArrowLeft.displayName = 'UserArrowLeft';

export default UserArrowLeft;
export { UserArrowLeft };
