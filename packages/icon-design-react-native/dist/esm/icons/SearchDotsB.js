import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchDotsB = forwardRef(function SearchDotsB(
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
    createElement(Circle, {"cx":"9.999999993273377","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement(Line, {"x1":"15.656860344834058","y1":"15.655639651518868","x2":"21.999999993273377","y2":"21.998779299956368","key":"1"}),
    createElement(Line, {"x1":"5.999999993283382","y1":"10.008779299956586","x2":"5.999999993283382","y2":"9.998779299956368","key":"2"}),
    createElement(Line, {"x1":"9.999999993283382","y1":"10.008779299956586","x2":"9.999999993283382","y2":"9.998779299956368","key":"3"}),
    createElement(Line, {"x1":"13.999999993283382","y1":"10.008779299956586","x2":"13.999999993283382","y2":"9.998779299956368","key":"4"})
  );
});

SearchDotsB.displayName = 'SearchDotsB';

export default SearchDotsB;
export { SearchDotsB };
