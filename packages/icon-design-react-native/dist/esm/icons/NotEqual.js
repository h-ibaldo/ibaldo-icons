import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const NotEqual = forwardRef(function NotEqual(
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
    createElement(Path, {"d":"M6 9L18 9","key":"0"}),
    createElement(Path, {"d":"M8 19L16 5","key":"1"}),
    createElement(Path, {"d":"M6 15L18 15","key":"2"})
  );
});

NotEqual.displayName = 'NotEqual';

export default NotEqual;
export { NotEqual };
