import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const SearchExpandC = forwardRef(function SearchExpandC(
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
    createElement(Circle, {"cx":"8.97473141752198","cy":"8.998779298535737","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"21.97473141752198","y1":"21.998779298535737","x2":"13.97473141752198","y2":"13.998779298535737","key":"1"}),
    createElement(Polyline, {"points":"5.974731417511066 6.998779298539375 5.974731417511066 5.998779298535737 6.974731417511066 5.998779298535737","key":"2"}),
    createElement(Polyline, {"points":"11.974731417532894 6.998779298517547 11.974731417492876 5.998779298513909 10.974731417492876 5.998779298557565","key":"3"}),
    createElement(Polyline, {"points":"11.974731417532894 10.998779298513909 11.974731417532894 11.998779298513909 10.974731417532894 11.998779298513909","key":"4"}),
    createElement(Polyline, {"points":"5.974731417511066 10.998779298535737 5.974731417551084 11.998779298535737 6.974731417561998 11.998779298492082","key":"5"}),
    createElement(Line, {"x1":"5.974731417511066","y1":"11.998779298535737","x2":"11.974731417511066","y2":"5.998779298535737","key":"6"}),
    createElement(Line, {"x1":"5.974731417511066","y1":"5.998779298535737","x2":"11.974731417511066","y2":"11.998779298535737","key":"7"})
  );
});

SearchExpandC.displayName = 'SearchExpandC';

export default SearchExpandC;
export { SearchExpandC };
