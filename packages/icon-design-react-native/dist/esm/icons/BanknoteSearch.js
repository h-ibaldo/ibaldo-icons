import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';

const BanknoteSearch = forwardRef(function BanknoteSearch(
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
    createElement(Circle, {"cx":"17.999999993642632","cy":"14.998779299956368","r":"4","key":"0"}),
    createElement(Line, {"x1":"15.171569817863201","y1":"17.827209475737618","x2":"10.999999993642632","y2":"21.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"10.999999993642632 12.998779299956368 1.999999993642632 12.998779299956368 1.999999993642632 1.998779299956368 18.999999993642632 1.998779299956368 18.999999993642632 7.998779299956368","key":"2"}),
    createElement(Path, {"d":"M14.999999993642632,1.998779299956368c0,2.209138999198331,1.790861000801669,4,4,4","key":"3"}),
    createElement(Path, {"d":"M5.999999993462552,12.998779300134629c.000000000190994-2.209138999198331-1.790861000439691-4.000000000160071-3.99999999963984-4.000000000356522","key":"4"}),
    createElement(Circle, {"cx":"10.499999993642632","cy":"7.498779299956368","r":"2.5","key":"5"}),
    createElement(Line, {"x1":"4.999999993642632","y1":"4.998779299956368","x2":"4.999999993642632","y2":"5.998779299956368","key":"6"})
  );
});

BanknoteSearch.displayName = 'BanknoteSearch';

export default BanknoteSearch;
export { BanknoteSearch };
