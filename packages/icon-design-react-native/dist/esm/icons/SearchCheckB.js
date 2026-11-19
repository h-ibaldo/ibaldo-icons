import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const SearchCheckB = forwardRef(function SearchCheckB(
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
    createElement(Circle, {"cx":"9.999999993264282","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement(Line, {"x1":"15.656860344823144","y1":"15.655639651518868","x2":"21.999999993264282","y2":"21.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"6.999999993283382 9.998779299956368 8.999999993283382 11.998779299956368 12.999999993283382 7.998779299956368","key":"2"})
  );
});

SearchCheckB.displayName = 'SearchCheckB';

export default SearchCheckB;
export { SearchCheckB };
