import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PiggyBank = forwardRef(function PiggyBank(
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
    createElement(Path, {"d":"M21 9L21.27 8.73C22.223 7.773 22.223 6.227 21.27 5.27L21 5","key":"0"}),
    createElement(Path, {"d":"M7 7L7 3C7 3 8.98 3.09 10.199 3.945C11.766 5.039 12 6 12 6C12 6 12.754 6 13 6C18.68 6 22 8.91 22 12.5C22 14.145 21.301 15.648 20 16.793L20 20C20 20.551 19.551 21 19 21L17 21C16.449 21 16 20.551 16 20L16 18.695C15.09 18.895 14.09 19 13 19C12.297 19 11.629 18.957 11 18.871L11 20C11 20.551 10.551 21 10 21L8 21C7.449 21 7 20.551 7 20L7 17.527C5.906 16.855 5.094 15.992 4.594 15L2 15L2 11L3 11C4 11 6.316 8.902 7 7Z","key":"1"})
  );
});

PiggyBank.displayName = 'PiggyBank';

export default PiggyBank;
export { PiggyBank };
