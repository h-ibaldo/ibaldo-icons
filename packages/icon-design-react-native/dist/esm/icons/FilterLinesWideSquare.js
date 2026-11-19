import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const FilterLinesWideSquare = forwardRef(function FilterLinesWideSquare(
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
    createElement(Rect, {"x":"1.974731449501633","y":"2.000000000479304","width":"20","height":"20.000000000000909","rx":"2.999999999999863","ry":"2.999999999999863","key":"0"}),
    createElement(Line, {"x1":"6.974731449501633","y1":"8.000000000480213","x2":"16.974731449501633","y2":"8.000000000480213","key":"1"}),
    createElement(Line, {"x1":"7.974731449501633","y1":"12.000000000480213","x2":"15.974731449501633","y2":"12.000000000480213","key":"2"}),
    createElement(Line, {"x1":"8.974731449501633","y1":"16.000000000480213","x2":"14.974731449501633","y2":"16.000000000480213","key":"3"})
  );
});

FilterLinesWideSquare.displayName = 'FilterLinesWideSquare';

export default FilterLinesWideSquare;
export { FilterLinesWideSquare };
