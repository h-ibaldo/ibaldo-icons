import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UserStarWide = forwardRef(function UserStarWide(
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
    createElement(Path, {"d":"M17.668 13.238L18.895 15.723L21.633 16.121C21.984 16.168 22.125 16.602 21.871 16.848L19.887 18.781L20.355 21.508C20.414 21.859 20.051 22.125 19.734 21.961L17.285 20.672L14.836 21.961C14.52 22.125 14.156 21.859 14.215 21.508L14.684 18.781L12.699 16.848C12.445 16.602 12.586 16.168 12.938 16.121L15.676 15.723L16.902 13.238C17.059 12.922 17.512 12.922 17.668 13.238Z","key":"0"}),
    createElement(Path, {"d":"M6 7C6 4.238 8.238 2 11 2C13.762 2 16 4.238 16 7C16 9.762 13.762 12 11 12C8.238 12 6 9.762 6 7Z","key":"1"}),
    createElement(Path, {"d":"M2 22L2 21C2 16.031 6.031 12 11 12C12.195 12 13.336 12.234 14.379 12.656","key":"2"})
  );
});

UserStarWide.displayName = 'UserStarWide';

export default UserStarWide;
export { UserStarWide };
