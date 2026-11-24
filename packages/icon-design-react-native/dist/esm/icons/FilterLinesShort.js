import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterLinesShort = forwardRef(function FilterLinesShort(
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
    createElement(Path, {"d":"M2 4L22 4","key":"0"}),
    createElement(Path, {"d":"M6 12L18 12","key":"1"}),
    createElement(Path, {"d":"M10 20L14 20","key":"2"})
  );
});

FilterLinesShort.displayName = 'FilterLinesShort';

export default FilterLinesShort;
export { FilterLinesShort };
