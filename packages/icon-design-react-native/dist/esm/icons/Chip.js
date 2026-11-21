import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Chip = forwardRef(function Chip(
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
    createElement(Path, {"d":"M7 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19L7 19C5.895 19 5 18.105 5 17L5 7C5 5.895 5.895 5 7 5Z","key":"0"}),
    createElement(Path, {"d":"M9 9L15 9L15 15L9 15Z","key":"1"}),
    createElement(Path, {"d":"M9 5L9 2","key":"2"}),
    createElement(Path, {"d":"M9 22L9 19","key":"3"}),
    createElement(Path, {"d":"M12 5L12 2","key":"4"}),
    createElement(Path, {"d":"M12 22L12 19","key":"5"}),
    createElement(Path, {"d":"M15 5L15 2","key":"6"}),
    createElement(Path, {"d":"M15 22L15 19","key":"7"}),
    createElement(Path, {"d":"M9 5L9 2","key":"8"}),
    createElement(Path, {"d":"M19 9L22 9","key":"9"}),
    createElement(Path, {"d":"M9 22L9 19","key":"10"}),
    createElement(Path, {"d":"M2 9L5 9","key":"11"}),
    createElement(Path, {"d":"M12 5L12 2","key":"12"}),
    createElement(Path, {"d":"M19 12L22 12","key":"13"}),
    createElement(Path, {"d":"M12 22L12 19","key":"14"}),
    createElement(Path, {"d":"M2 12L5 12","key":"15"}),
    createElement(Path, {"d":"M15 5L15 2","key":"16"}),
    createElement(Path, {"d":"M19 15L22 15","key":"17"}),
    createElement(Path, {"d":"M15 22L15 19","key":"18"}),
    createElement(Path, {"d":"M2 15L5 15","key":"19"})
  );
});

Chip.displayName = 'Chip';

export default Chip;
export { Chip };
