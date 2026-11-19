import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const SearchShine = forwardRef(function SearchShine(
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
    createElement(Circle, {"cx":"11.025268548872191","cy":"10.99877929993454","r":"9","key":"0"}),
    createElement(Path, {"d":"M6.025268548282838,10.99877929993454c0-2.761423749325331,2.238576251260383-5.000000000585715,5.000000000589353-5.000000000585715","key":"1"}),
    createElement(Line, {"x1":"17.389221185583665","y1":"17.36273193665329","x2":"22.025268548872191","y2":"21.99877929993454","key":"2"})
  );
});

SearchShine.displayName = 'SearchShine';

export default SearchShine;
export { SearchShine };
