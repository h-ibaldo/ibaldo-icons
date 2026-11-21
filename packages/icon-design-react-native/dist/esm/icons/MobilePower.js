import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MobilePower = forwardRef(function MobilePower(
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
    createElement(Path, {"d":"M17 22L7 22C5.895 22 5 21.105 5 20L5 4C5 2.895 5.895 2 7 2L17 2C18.105 2 19 2.895 19 4L19 20C19 21.105 18.105 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M5 18L19 18","key":"1"}),
    createElement(Path, {"d":"M12 6L12 10","key":"2"}),
    createElement(Path, {"d":"M15 7.355C15.621 8.059 16 8.984 16 10C16 12.211 14.211 14 12 14C9.789 14 8 12.211 8 10C8 8.984 8.379 8.059 9 7.355","key":"3"})
  );
});

MobilePower.displayName = 'MobilePower';

export default MobilePower;
export { MobilePower };
