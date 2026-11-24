import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const ArrowSyncNodesDiagonal = forwardRef(function ArrowSyncNodesDiagonal(
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
    createElement(Polyline, {"points":"21.999999999690772 11.000000000178261 19.999999999508873 12.999999999998181 17.999999999690772 10.999999999818101","key":"0"}),
    createElement(Circle, {"cx":"7.99999999927968","cy":"4.999999999998181","r":"3","key":"1"}),
    createElement(Path, {"d":"M19.99999999927968,11.999999999998181c0-4.418212890630457-3.58172607421875-8-8-8-.393310546875,0-.777099609375.037109375-1.15521240234375.091796875","key":"2"}),
    createElement(Polyline, {"points":"1.999999999407009 12.999999999638021 3.999999999768988 10.999999999998181 5.999999999407009 13.000000000358341","key":"3"}),
    createElement(Circle, {"cx":"15.99999999927968","cy":"19.000000001077296","r":"2.999999999999773","key":"4"}),
    createElement(Path, {"d":"M3.999999999909051,11.999999999998181c-.00000000039654,4.418212890619543,3.58172607349843,8.000000000320142,7.99999999927968,8.00000000072032.393310546875.000000000030923.777099609378638-.037109374929059,1.155212402352845-.091796874899956","key":"5"})
  );
});

ArrowSyncNodesDiagonal.displayName = 'ArrowSyncNodesDiagonal';

export default ArrowSyncNodesDiagonal;
export { ArrowSyncNodesDiagonal };
