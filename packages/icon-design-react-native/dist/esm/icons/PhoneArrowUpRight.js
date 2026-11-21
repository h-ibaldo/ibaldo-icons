import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PhoneArrowUpRight = forwardRef(function PhoneArrowUpRight(
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
    createElement(Path, {"d":"M8.035 17.867L6.133 15.965C4.391 14.223 3.078 12.098 2.301 9.762C1.746 8.098 1.945 6.277 2.848 4.777L3.93 2.973C4.293 2.367 4.941 2 5.645 2L6.527 2C7.199 2 7.82 2.336 8.191 2.891L10.457 6.285C11.125 7.289 10.762 8.648 9.688 9.184L7.598 10.23L8.164 11.363C9.133 13.297 10.703 14.867 12.637 15.836L13.77 16.402L14.816 14.313C15.352 13.238 16.711 12.875 17.715 13.543L21.109 15.809C21.664 16.18 22 16.801 22 17.473L22 18.355C22 19.059 21.633 19.707 21.027 20.07L19.223 21.152C17.723 22.055 15.902 22.254 14.238 21.699C11.902 20.922 9.777 19.609 8.035 17.867Z","key":"0"}),
    createElement(Path, {"d":"M15 9L22 2","key":"1"}),
    createElement(Path, {"d":"M22 8L22 2L16 2","key":"2"})
  );
});

PhoneArrowUpRight.displayName = 'PhoneArrowUpRight';

export default PhoneArrowUpRight;
export { PhoneArrowUpRight };
