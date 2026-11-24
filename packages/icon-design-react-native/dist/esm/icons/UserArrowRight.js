import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UserArrowRight = forwardRef(function UserArrowRight(
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
    createElement(Path, {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z","key":"0"}),
    createElement(Path, {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C14.727 13 15.418 13.129 16.063 13.363","key":"1"}),
    createElement(Path, {"d":"M14 19L21 19","key":"2"}),
    createElement(Path, {"d":"M18 22L21 19L18 16","key":"3"})
  );
});

UserArrowRight.displayName = 'UserArrowRight';

export default UserArrowRight;
export { UserArrowRight };
