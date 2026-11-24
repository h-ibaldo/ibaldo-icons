import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const SearchCheckC = forwardRef(function SearchCheckC(
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
    createElement(Circle, {"cx":"8.999999993264282","cy":"8.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"21.999999993264282","y1":"21.998779299956368","x2":"13.999999993264282","y2":"13.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"6.749999993264282 8.998779299956368 8.249999993264282 10.498779299956368 11.249999993264282 7.498779299956368","key":"2"})
  );
});

SearchCheckC.displayName = 'SearchCheckC';

export default SearchCheckC;
export { SearchCheckC };
