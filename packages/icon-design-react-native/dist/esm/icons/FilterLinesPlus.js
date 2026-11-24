import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterLinesPlus = forwardRef(function FilterLinesPlus(
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
    createElement(Path, {"d":"M2 5L12 5","key":"0"}),
    createElement(Path, {"d":"M16 5L22 5","key":"1"}),
    createElement(Path, {"d":"M19 2L19 8","key":"2"}),
    createElement(Path, {"d":"M6 13L18 13","key":"3"}),
    createElement(Path, {"d":"M10 20L14 20","key":"4"})
  );
});

FilterLinesPlus.displayName = 'FilterLinesPlus';

export default FilterLinesPlus;
export { FilterLinesPlus };
