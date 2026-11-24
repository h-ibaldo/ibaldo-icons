import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WifiLow = forwardRef(function WifiLow(
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
    createElement(Path, {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"0"}),
    createElement(Path, {"d":"M12 20L12 20","key":"1"})
  );
});

WifiLow.displayName = 'WifiLow';

export default WifiLow;
export { WifiLow };
