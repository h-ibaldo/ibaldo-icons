import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const FilterLines = forwardRef(function FilterLines(
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
    createElement(Line, {"x1":"1.974731449505271","y1":"5.000000000479304","x2":"21.974731449505271","y2":"5.000000000479304","key":"0"}),
    createElement(Line, {"x1":"4.974731449505271","y1":"10.000000000480213","x2":"18.974731449505271","y2":"10.000000000480213","key":"1"}),
    createElement(Line, {"x1":"7.974731449505271","y1":"15.000000000480213","x2":"15.974731449505271","y2":"15.000000000480213","key":"2"}),
    createElement(Line, {"x1":"10.974731449505271","y1":"20.000000000480213","x2":"12.974731449505271","y2":"20.000000000480213","key":"3"})
  );
});

FilterLines.displayName = 'FilterLines';

export default FilterLines;
export { FilterLines };
