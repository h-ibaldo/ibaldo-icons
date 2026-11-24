import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PhoneHeart = forwardRef(function PhoneHeart(
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
    createElement(Path, {"d":"M20.707 3.734C19.73 2.754 18.242 2.754 17.27 3.734L16.684 4.195L16.27 3.734C15.293 2.754 13.711 2.754 12.73 3.734C11.758 4.707 11.758 6.293 12.73 7.27L13.145 7.734L16.684 11.27L20.219 7.734L20.707 7.27C21.684 6.293 21.684 4.707 20.707 3.734Z","key":"0"}),
    createElement(Path, {"d":"M7.578 18.469L5.473 16.367C4.035 14.93 2.949 13.176 2.309 11.246C1.754 9.582 1.953 7.762 2.855 6.262L3.629 4.973C3.992 4.367 4.641 4 5.344 4L5.918 4C6.586 4 7.211 4.336 7.582 4.891L9.434 7.668C10.102 8.668 9.738 10.027 8.664 10.566L6.988 11.402L7.348 12.125C8.316 14.059 9.883 15.629 11.82 16.594L12.539 16.957L13.379 15.281C13.914 14.203 15.273 13.844 16.277 14.512L19.051 16.363C19.609 16.734 19.941 17.355 19.941 18.027L19.941 18.598C19.941 19.301 19.574 19.953 18.973 20.316L17.684 21.09C16.18 21.988 14.359 22.188 12.699 21.637C10.77 20.992 9.016 19.91 7.578 18.469Z","key":"1"})
  );
});

PhoneHeart.displayName = 'PhoneHeart';

export default PhoneHeart;
export { PhoneHeart };
