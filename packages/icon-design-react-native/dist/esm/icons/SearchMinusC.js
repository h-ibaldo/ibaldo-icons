import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchMinusC = forwardRef(function SearchMinusC(
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
    createElement(Circle, {"cx":"8.999999993642632","cy":"8.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"21.999999993642632","y1":"21.998779299956368","x2":"13.999999993642632","y2":"13.998779299956368","key":"1"}),
    createElement(Line, {"x1":"11.999999993642632","y1":"8.998779299956368","x2":"5.999999993642632","y2":"8.998779299956368","key":"2"})
  );
});

SearchMinusC.displayName = 'SearchMinusC';

export default SearchMinusC;
export { SearchMinusC };
