import { createElement, forwardRef } from 'react';
import Svg, { Path, Polygon, Polyline } from 'react-native-svg';

const BagSide = forwardRef(function BagSide(
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
    createElement(Path, {"d":"M7.999999999770807,7.00000399606688l.00000000008913-1.000003999997716c.000000000200089-2.209136790192133,1.790859210179406-3.999995999842213,3.999996000360625-3.999995999642124h.00000799999907c2.209136790181219.000000000189175,3.999995999840394,1.790859210170311,3.999995999640305,3.999996000362444l-.00000000008913,1.000003999986802","key":"0"}),
    createElement(Polygon, {"points":"16 22.00000399642704 2 22.00000399642704 5 8.00000399642704 19 8.00000399642704 16 22.00000399642704","key":"1"}),
    createElement(Polyline, {"points":"16 22.00000399615783 22 22.000003996827218 19.000000000620275 8.00000399669625","key":"2"})
  );
});

BagSide.displayName = 'BagSide';

export default BagSide;
export { BagSide };
