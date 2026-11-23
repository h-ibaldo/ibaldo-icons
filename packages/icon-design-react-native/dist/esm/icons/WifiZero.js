import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WifiZero = forwardRef(function WifiZero(
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
    createElement(Path, {"d":"M12 21L12 21","key":"0"})
  );
});

WifiZero.displayName = 'WifiZero';

export default WifiZero;
export { WifiZero };
