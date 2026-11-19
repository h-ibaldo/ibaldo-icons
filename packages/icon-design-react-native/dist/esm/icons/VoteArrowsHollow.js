import { createElement, forwardRef } from 'react';
import Svg, { Polygon } from 'react-native-svg';

const VoteArrowsHollow = forwardRef(function VoteArrowsHollow(
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
    createElement(Polygon, {"points":"17.016630450972116 7.000000000480213 12.016630450972116 2.000000000480213 7.016630450972116 7.000000000480213 10.016630450972116 7.000000000480213 10.016630450972116 10.000000000480213 14.016630450972116 10.000000000480213 14.016630450972116 7.000000000480213 17.016630450972116 7.000000000480213","key":"0"}),
    createElement(Polygon, {"points":"7.016630450972116 17.000000000480213 12.016630450972116 22.000000000480213 17.016630450972116 17.000000000480213 14.016630450972116 17.000000000480213 14.016630450972116 14.000000000480213 10.016630450972116 14.000000000480213 10.016630450972116 17.000000000480213 7.016630450972116 17.000000000480213","key":"1"})
  );
});

VoteArrowsHollow.displayName = 'VoteArrowsHollow';

export default VoteArrowsHollow;
export { VoteArrowsHollow };
