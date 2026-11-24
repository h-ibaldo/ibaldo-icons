import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Broom = forwardRef(function Broom(
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
    createElement(Path, {"d":"M19 13L5 13L3 22L21 22Z","key":"0"}),
    createElement(Path, {"d":"M15 22L15 18","key":"1"}),
    createElement(Path, {"d":"M9 22L9 19","key":"2"}),
    createElement(Path, {"d":"M20 11L20 13L4 13L4 11C4 9.895 4.895 9 6 9L10 9L10 4C10 2.895 10.895 2 12 2C13.105 2 14 2.895 14 4L14 9L18 9C19.105 9 20 9.895 20 11Z","key":"3"})
  );
});

Broom.displayName = 'Broom';

export default Broom;
export { Broom };
