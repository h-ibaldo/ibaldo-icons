import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PhoneHeartSharp = forwardRef(function PhoneHeartSharp(
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
    createElement(Path, {"d":"M6.418 10.297L6.457 10.398C7.621 13.742 10.266 16.359 13.617 17.492","key":"0"}),
    createElement(Path, {"d":"M13.703 14.793L15.414 13.895L19.914 16.594L19.254 19.887C19.102 20.648 18.609 21.293 17.914 21.641C17.457 21.867 16.941 21.953 16.438 21.879L14.969 21.668C12.316 21.289 9.813 20.207 7.723 18.535C6.855 17.844 6.07 17.055 5.379 16.191C3.703 14.098 2.621 11.598 2.242 8.941L2.031 7.477C1.961 6.969 2.043 6.453 2.273 5.996C2.617 5.305 3.266 4.813 4.023 4.66L7.32 4L10.02 8.496L9.203 9.398","key":"1"}),
    createElement(Path, {"d":"M20.707 3.734C19.73 2.754 18.242 2.754 17.27 3.734L16.684 4.195L16.27 3.734C15.293 2.754 13.711 2.754 12.73 3.734C11.758 4.707 11.758 6.293 12.73 7.27L13.145 7.734L16.684 11.27L20.219 7.734L20.707 7.27C21.684 6.293 21.684 4.707 20.707 3.734Z","key":"2"})
  );
});

PhoneHeartSharp.displayName = 'PhoneHeartSharp';

export default PhoneHeartSharp;
export { PhoneHeartSharp };
