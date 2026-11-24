import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareSparklePlus = forwardRef(function SquareSparklePlus(
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
    createElement(Path, {"d":"M11 7.5C14.039 7.5 16.5 9.961 16.5 13","key":"0"}),
    createElement(Path, {"d":"M22 7.5C18.961 7.5 16.5 9.961 16.5 13","key":"1"}),
    createElement(Path, {"d":"M22 7.5C18.961 7.5 16.5 5.039 16.5 2","key":"2"}),
    createElement(Path, {"d":"M11 7.5C14.039 7.5 16.5 5.039 16.5 2","key":"3"}),
    createElement(Path, {"d":"M21 13L21 18C21 19.656 19.656 21 18 21L6 21C4.344 21 3 19.656 3 18L3 6C3 4.344 4.344 3 6 3L11 3","key":"4"}),
    createElement(Path, {"d":"M9.5 12L9.5 17","key":"5"}),
    createElement(Path, {"d":"M12 14.5L7 14.5","key":"6"})
  );
});

SquareSparklePlus.displayName = 'SquareSparklePlus';

export default SquareSparklePlus;
export { SquareSparklePlus };
