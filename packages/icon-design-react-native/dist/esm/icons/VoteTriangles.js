import { createElement, forwardRef } from 'react';
import Svg, { Polygon } from 'react-native-svg';

const VoteTriangles = forwardRef(function VoteTriangles(
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
    createElement(Polygon, {"points":"7.016630450972116 9.000000000480213 12.016630450972116 3.000000000480213 17.016630450972116 9.000000000480213 7.016630450972116 9.000000000480213","key":"0"}),
    createElement(Polygon, {"points":"17.016630450972116 15.000000000480213 12.016630450972116 21.000000000480213 7.016630450972116 15.000000000480213 17.016630450972116 15.000000000480213","key":"1"})
  );
});

VoteTriangles.displayName = 'VoteTriangles';

export default VoteTriangles;
export { VoteTriangles };
