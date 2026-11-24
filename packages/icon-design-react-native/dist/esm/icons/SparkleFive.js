import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SparkleFive = forwardRef(function SparkleFive(
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
    createElement(Path, {"d":"M3 6C4.656 6 6 7.344 6 9","key":"0"}),
    createElement(Path, {"d":"M9 6C7.344 6 6 7.344 6 9","key":"1"}),
    createElement(Path, {"d":"M9 6C7.344 6 6 4.656 6 3","key":"2"}),
    createElement(Path, {"d":"M3 6C4.656 6 6 4.656 6 3","key":"3"}),
    createElement(Path, {"d":"M15 6C16.656 6 18 7.344 18 9","key":"4"}),
    createElement(Path, {"d":"M21 6C19.344 6 18 7.344 18 9","key":"5"}),
    createElement(Path, {"d":"M21 6C19.344 6 18 4.656 18 3","key":"6"}),
    createElement(Path, {"d":"M15 6C16.656 6 18 4.656 18 3","key":"7"}),
    createElement(Path, {"d":"M8 13C9.656 13 11 14.344 11 16","key":"8"}),
    createElement(Path, {"d":"M14 13C12.344 13 11 14.344 11 16","key":"9"}),
    createElement(Path, {"d":"M14 13C12.344 13 11 11.656 11 10","key":"10"}),
    createElement(Path, {"d":"M8 13C9.656 13 11 11.656 11 10","key":"11"}),
    createElement(Path, {"d":"M15 18C16.656 18 18 19.344 18 21","key":"12"}),
    createElement(Path, {"d":"M21 18C19.344 18 18 19.344 18 21","key":"13"}),
    createElement(Path, {"d":"M21 18C19.344 18 18 16.656 18 15","key":"14"}),
    createElement(Path, {"d":"M15 18C16.656 18 18 16.656 18 15","key":"15"}),
    createElement(Path, {"d":"M2 19C3.656 19 5 20.344 5 22","key":"16"}),
    createElement(Path, {"d":"M8 19C6.344 19 5 20.344 5 22","key":"17"}),
    createElement(Path, {"d":"M8 19C6.344 19 5 17.656 5 16","key":"18"}),
    createElement(Path, {"d":"M2 19C3.656 19 5 17.656 5 16","key":"19"})
  );
});

SparkleFive.displayName = 'SparkleFive';

export default SparkleFive;
export { SparkleFive };
