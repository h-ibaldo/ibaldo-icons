import { createElement, forwardRef } from 'react';

const UserStar = forwardRef(function UserStar(
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
    createElement('path', {"d":"M6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6C14 8.211 12.211 10 10 10C7.789 10 6 8.211 6 6Z","key":"0"}),
    createElement('path', {"d":"M2 22L2 19C2 15.688 4.688 13 8 13L12 13C12.586 13 13.148 13.082 13.684 13.238","key":"1"}),
    createElement('path', {"d":"M17.668 13.238L18.895 15.723L21.633 16.121C21.984 16.168 22.125 16.602 21.871 16.848L19.887 18.781L20.355 21.508C20.414 21.859 20.051 22.125 19.734 21.961L17.285 20.672L14.836 21.961C14.52 22.125 14.156 21.859 14.215 21.508L14.684 18.781L12.699 16.848C12.445 16.602 12.586 16.168 12.938 16.121L15.676 15.723L16.902 13.238C17.059 12.922 17.512 12.922 17.668 13.238Z","key":"2"})
  );
});

UserStar.displayName = 'UserStar';

export default UserStar;
export { UserStar };
