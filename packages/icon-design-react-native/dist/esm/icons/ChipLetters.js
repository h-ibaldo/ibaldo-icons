import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChipLetters = forwardRef(function ChipLetters(
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
    createElement(Path, {"d":"M6 4L18 4C19.105 4 20 4.895 20 6L20 18C20 19.105 19.105 20 18 20L6 20C4.895 20 4 19.105 4 18L4 6C4 4.895 4.895 4 6 4Z","key":"0"}),
    createElement(Path, {"d":"M9 4L9 2","key":"1"}),
    createElement(Path, {"d":"M9 22L9 20","key":"2"}),
    createElement(Path, {"d":"M12 4L12 2","key":"3"}),
    createElement(Path, {"d":"M12 22L12 20","key":"4"}),
    createElement(Path, {"d":"M15 4L15 2","key":"5"}),
    createElement(Path, {"d":"M15 22L15 20","key":"6"}),
    createElement(Path, {"d":"M9 4L9 2","key":"7"}),
    createElement(Path, {"d":"M20 9L22 9","key":"8"}),
    createElement(Path, {"d":"M9 22L9 20","key":"9"}),
    createElement(Path, {"d":"M2 9L4 9","key":"10"}),
    createElement(Path, {"d":"M12 4L12 2","key":"11"}),
    createElement(Path, {"d":"M20 12L22 12","key":"12"}),
    createElement(Path, {"d":"M12 22L12 20","key":"13"}),
    createElement(Path, {"d":"M2 12L4 12","key":"14"}),
    createElement(Path, {"d":"M15 4L15 2","key":"15"}),
    createElement(Path, {"d":"M20 15L22 15","key":"16"}),
    createElement(Path, {"d":"M15 22L15 20","key":"17"}),
    createElement(Path, {"d":"M2 15L4 15","key":"18"}),
    createElement(Path, {"d":"M16 8L16 15","key":"19"}),
    createElement(Path, {"d":"M8 13L13 13","key":"20"}),
    createElement(Path, {"d":"M8 15L8 10.5C8 9.121 9.121 8 10.5 8C11.879 8 13 9.121 13 10.5L13 15","key":"21"})
  );
});

ChipLetters.displayName = 'ChipLetters';

export default ChipLetters;
export { ChipLetters };
