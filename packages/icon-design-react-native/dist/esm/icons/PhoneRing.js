import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PhoneRing = forwardRef(function PhoneRing(
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
    createElement(Path, {"d":"M7.809 18.164L5.805 16.16C4.215 14.574 3.02 12.633 2.309 10.504C1.754 8.84 1.953 7.02 2.855 5.52L3.781 3.973C4.145 3.367 4.797 3 5.5 3L6.227 3C6.895 3 7.52 3.336 7.891 3.891L9.945 6.977C10.613 7.977 10.254 9.336 9.176 9.875L7.297 10.816L7.758 11.742C8.727 13.676 10.297 15.246 12.23 16.211L13.156 16.676L14.098 14.793C14.637 13.719 15.996 13.359 16.996 14.023L20.082 16.082C20.637 16.453 20.973 17.078 20.973 17.746L20.973 18.473C20.973 19.176 20.602 19.828 20 20.188L18.453 21.117C16.953 22.02 15.133 22.219 13.469 21.664C11.336 20.953 9.398 19.754 7.809 18.164Z","key":"0"}),
    createElement(Path, {"d":"M14 6C16.211 6 18 7.789 18 10","key":"1"}),
    createElement(Path, {"d":"M14 2C18.418 2 22 5.582 22 10","key":"2"})
  );
});

PhoneRing.displayName = 'PhoneRing';

export default PhoneRing;
export { PhoneRing };
