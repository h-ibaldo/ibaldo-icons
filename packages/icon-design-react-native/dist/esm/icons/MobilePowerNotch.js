import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MobilePowerNotch = forwardRef(function MobilePowerNotch(
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
    createElement(Path, {"d":"M7 2L17 2C18.105 2 19 2.895 19 4L19 20C19 21.105 18.105 22 17 22L7 22C5.895 22 5 21.105 5 20L5 4C5 2.895 5.895 2 7 2Z","key":"0"}),
    createElement(Path, {"d":"M13 5L11 5","key":"1"}),
    createElement(Path, {"d":"M12 10L12 14","key":"2"}),
    createElement(Path, {"d":"M15 11.355C15.621 12.059 16 12.984 16 14C16 16.211 14.211 18 12 18C9.789 18 8 16.211 8 14C8 12.984 8.379 12.059 9 11.355","key":"3"})
  );
});

MobilePowerNotch.displayName = 'MobilePowerNotch';

export default MobilePowerNotch;
export { MobilePowerNotch };
