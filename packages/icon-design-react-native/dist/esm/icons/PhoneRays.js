import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PhoneRays = forwardRef(function PhoneRays(
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
    createElement(Path, {"d":"M17 7L20 4","key":"0"}),
    createElement(Path, {"d":"M13 6L13 2","key":"1"}),
    createElement(Path, {"d":"M22 11L18 11","key":"2"}),
    createElement(Path, {"d":"M7.633 18.477L5.531 16.375C4.09 14.938 3.008 13.184 2.363 11.254C1.813 9.59 2.012 7.77 2.91 6.27L3.688 4.98C4.047 4.375 4.699 4.008 5.402 4.008L5.973 4.008C6.645 4.008 7.266 4.344 7.637 4.898L9.488 7.676C10.156 8.676 9.797 10.035 8.719 10.574L7.043 11.41L7.406 12.133C8.371 14.066 9.941 15.637 11.875 16.602L12.598 16.965L13.434 15.289C13.973 14.211 15.332 13.852 16.332 14.52L19.109 16.371C19.664 16.742 20 17.363 20 18.035L20 18.605C20 19.309 19.633 19.961 19.027 20.324L17.738 21.098C16.238 21.996 14.418 22.195 12.754 21.645C10.824 21 9.07 19.918 7.633 18.477Z","key":"3"})
  );
});

PhoneRays.displayName = 'PhoneRays';

export default PhoneRays;
export { PhoneRays };
