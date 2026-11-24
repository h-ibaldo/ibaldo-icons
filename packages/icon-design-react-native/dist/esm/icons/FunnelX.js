import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FunnelX = forwardRef(function FunnelX(
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
    createElement(Path, {"d":"M17 7L21 3","key":"0"}),
    createElement(Path, {"d":"M17 3L21 7","key":"1"}),
    createElement(Path, {"d":"M16.219 11L14.039 14L14.039 20L10.039 22L10.039 14L3.191 4.59C2.711 3.926 3.184 3 4 3L13 3","key":"2"})
  );
});

FunnelX.displayName = 'FunnelX';

export default FunnelX;
export { FunnelX };
