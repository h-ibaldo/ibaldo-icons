import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UserLock = forwardRef(function UserLock(
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
    createElement(Path, {"d":"M6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6C14 8.211 12.211 10 10 10C7.789 10 6 8.211 6 6Z","key":"0"}),
    createElement(Path, {"d":"M2 22L2 19C2 15.688 4.688 13 8 13L12 13","key":"1"}),
    createElement(Path, {"d":"M22 16L14 16L14 22L22 22Z","key":"2"}),
    createElement(Path, {"d":"M18 11C16.344 11 15 12.344 15 14L15 16L21 16L21 14C21 12.344 19.656 11 18 11Z","key":"3"})
  );
});

UserLock.displayName = 'UserLock';

export default UserLock;
export { UserLock };
