import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const SearchOneToOne = forwardRef(function SearchOneToOne(
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
    createElement(Circle, {"cx":"10.974731417511066","cy":"10.998779298535737","r":"9","key":"0"}),
    createElement(Line, {"x1":"17.33868405422254","y1":"17.362731935254487","x2":"21.974731417511066","y2":"21.998779298535737","key":"1"}),
    createElement(Polyline, {"points":"5.974731417511066 8.998779298535737 6.974731417511066 8.998779298535737 6.974731417511066 12.998779298535737","key":"2"}),
    createElement(Polyline, {"points":"13.974731417511066 8.998779298535737 14.974731417511066 8.998779298535737 14.974731417511066 12.998779298535737","key":"3"}),
    createElement(Line, {"x1":"10.974731417511066","y1":"9.008779298535956","x2":"10.974731417511066","y2":"8.998779298535737","key":"4"}),
    createElement(Line, {"x1":"10.974731417511066","y1":"13.008779298535956","x2":"10.974731417511066","y2":"12.998779298535737","key":"5"})
  );
});

SearchOneToOne.displayName = 'SearchOneToOne';

export default SearchOneToOne;
export { SearchOneToOne };
