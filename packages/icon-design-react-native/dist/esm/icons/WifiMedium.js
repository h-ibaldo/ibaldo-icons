import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WifiMedium = forwardRef(function WifiMedium(
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
    createElement(Path, {"d":"M5.59 11.852C9.492 9.383 14.508 9.383 18.41 11.852","key":"0"}),
    createElement(Path, {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"1"}),
    createElement(Path, {"d":"M12 20L12 20","key":"2"})
  );
});

WifiMedium.displayName = 'WifiMedium';

export default WifiMedium;
export { WifiMedium };
