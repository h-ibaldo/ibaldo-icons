import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchXC = forwardRef(function SearchXC(
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
    createElement(Circle, {"cx":"9.000000018382707","cy":"8.99877930438015","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"22.000000018382707","y1":"21.99877930438015","x2":"14.000000018382707","y2":"13.99877930438015","key":"1"}),
    createElement(Line, {"x1":"7.000000018382707","y1":"10.99877930438015","x2":"11.000000018382707","y2":"6.99877930438015","key":"2"}),
    createElement(Line, {"x1":"11.000000018202627","y1":"10.998779304562049","x2":"7.000000018562787","y2":"6.998779304201889","key":"3"})
  );
});

SearchXC.displayName = 'SearchXC';

export default SearchXC;
export { SearchXC };
