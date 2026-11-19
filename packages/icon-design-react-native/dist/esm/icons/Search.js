import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const Search = forwardRef(function Search(
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
    createElement(Circle, {"cx":"10.999999993642632","cy":"10.998779299955459","r":"8.999999999998636","key":"0"}),
    createElement(Line, {"x1":"17.363952630354106","y1":"17.362731936675118","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"})
  );
});

Search.displayName = 'Search';

export default Search;
export { Search };
