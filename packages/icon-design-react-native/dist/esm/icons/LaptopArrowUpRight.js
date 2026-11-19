import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const LaptopArrowUpRight = forwardRef(function LaptopArrowUpRight(
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
    createElement(Line, {"x1":"1.974731440099276","y1":"20.000000003885361","x2":"21.974731440099276","y2":"20.000000003885361","key":"0"}),
    createElement(Polyline, {"points":"15.974735233239699 4.000000003885361 19.974731440099276 4.000000003885361 19.974731440099276 7.999997600407369","key":"1"}),
    createElement(Path, {"d":"M19.974731440099276,12.000000003885361v2c0,1.104569499661011-.895430500329894,2-2,2H5.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500340808-2,2-2h5.999995110101736","key":"2"}),
    createElement(Line, {"x1":"13.974731440099276","y1":"10.000000003885361","x2":"19.974731440099276","y2":"4.000000003885361","key":"3"})
  );
});

LaptopArrowUpRight.displayName = 'LaptopArrowUpRight';

export default LaptopArrowUpRight;
export { LaptopArrowUpRight };
