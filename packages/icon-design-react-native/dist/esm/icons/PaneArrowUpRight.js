import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const PaneArrowUpRight = forwardRef(function PaneArrowUpRight(
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
    createElement(Path, {"d":"M3.999999993642632,17.075561526518868V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-8","key":"0"}),
    createElement(Polyline, {"points":"8.999999993642632 12.998779299956368 12.999999993642632 12.998779299956368 12.999999993642632 16.998779299956368","key":"1"}),
    createElement(Line, {"x1":"3.999999993642632","y1":"21.998779299956368","x2":"12.999999993642632","y2":"12.998779299956368","key":"2"})
  );
});

PaneArrowUpRight.displayName = 'PaneArrowUpRight';

export default PaneArrowUpRight;
export { PaneArrowUpRight };
