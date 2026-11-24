import { createElement, forwardRef } from 'react';
import Svg, { Circle, Polygon } from 'react-native-svg';

const InfoHollow = forwardRef(function InfoHollow(
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
    createElement(Polygon, {"points":"7.025268553439673 21.99999656424734 17.025268553439673 21.99999656424734 17.025268553439673 18.99999656424734 14.025268553439673 18.99999656424734 14.025268553439673 10.99999656424734 7.025268553439673 10.99999656424734 7.025268553439673 13.99999656424734 10.025268553439673 13.99999656424734 10.025268553439673 18.99999656424734 7.025268553439673 18.99999656424734 7.025268553439673 21.99999656424734","key":"0"}),
    createElement(Circle, {"cx":"12.025268553439673","cy":"4.99999656424734","r":"3","key":"1"})
  );
});

InfoHollow.displayName = 'InfoHollow';

export default InfoHollow;
export { InfoHollow };
