import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TagDividerDashed = forwardRef(function TagDividerDashed(
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
    createElement(Path, {"d":"M18 5L20 5C21.105 5 22 5.895 22 7L22 17C22 18.105 21.105 19 20 19L18 19","key":"0"}),
    createElement(Path, {"d":"M10 19L7.957 19C7.352 19 6.777 18.727 6.398 18.254L2.375 13.254C1.785 12.523 1.785 11.477 2.375 10.746L6.398 5.746C6.777 5.273 7.352 5 7.957 5L10 5","key":"1"}),
    createElement(Path, {"d":"M8 13C7.449 13 7 12.551 7 12C7 11.449 7.449 11 8 11C8.551 11 9 11.449 9 12C9 12.551 8.551 13 8 13Z","key":"2"}),
    createElement(Path, {"d":"M14 2L14 4","key":"3"}),
    createElement(Path, {"d":"M14 8L14 10","key":"4"}),
    createElement(Path, {"d":"M14 14L14 16","key":"5"}),
    createElement(Path, {"d":"M14 20L14 22","key":"6"})
  );
});

TagDividerDashed.displayName = 'TagDividerDashed';

export default TagDividerDashed;
export { TagDividerDashed };
