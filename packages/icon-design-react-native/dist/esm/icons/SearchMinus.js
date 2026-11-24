import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchMinus = forwardRef(function SearchMinus(
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
    createElement(Line, {"x1":"17.363952630352287","y1":"17.362731936675118","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"}),
    createElement(Line, {"x1":"6.999999993642632","y1":"10.998779299956368","x2":"14.999999993642632","y2":"10.998779299956368","key":"2"})
  );
});

SearchMinus.displayName = 'SearchMinus';

export default SearchMinus;
export { SearchMinus };
