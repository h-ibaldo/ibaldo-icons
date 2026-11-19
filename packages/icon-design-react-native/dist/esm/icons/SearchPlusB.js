import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchPlusB = forwardRef(function SearchPlusB(
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
    createElement(Circle, {"cx":"9.999999993642632","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement(Line, {"x1":"15.656860345212408","y1":"15.655639651518868","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"}),
    createElement(Line, {"x1":"9.999999993642632","y1":"6.998779299956368","x2":"9.999999993642632","y2":"12.998779299956368","key":"2"}),
    createElement(Line, {"x1":"12.999999993642632","y1":"9.998779299956368","x2":"6.999999993642632","y2":"9.998779299956368","key":"3"})
  );
});

SearchPlusB.displayName = 'SearchPlusB';

export default SearchPlusB;
export { SearchPlusB };
