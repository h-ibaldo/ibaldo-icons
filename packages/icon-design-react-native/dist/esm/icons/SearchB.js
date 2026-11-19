import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchB = forwardRef(function SearchB(
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
    createElement(Line, {"x1":"15.656860345214227","y1":"15.655639651518868","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"})
  );
});

SearchB.displayName = 'SearchB';

export default SearchB;
export { SearchB };
