import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BanknoteDollarArrowLeft = forwardRef(function BanknoteDollarArrowLeft(
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
    createElement(Path, {"d":"M22 15L22 3L2 3L2 19L12 19","key":"0"}),
    createElement(Path, {"d":"M17 3C17 5.762 19.238 8 22 8","key":"1"}),
    createElement(Path, {"d":"M2 14C4.762 14 7 16.238 7 19","key":"2"}),
    createElement(Path, {"d":"M2 8C4.762 8 7 5.762 7 3","key":"3"}),
    createElement(Path, {"d":"M14.586 8C14.063 7.406 13.105 7 12 7C10.344 7 9 7.895 9 9C9 10.105 10.344 11 12 11","key":"4"}),
    createElement(Path, {"d":"M9.414 14C9.938 14.594 10.895 15 12 15C13.656 15 15 14.105 15 13C15 11.895 13.656 11 12 11","key":"5"}),
    createElement(Path, {"d":"M12 6L12 7","key":"6"}),
    createElement(Path, {"d":"M12 15L12 16","key":"7"}),
    createElement(Path, {"d":"M22 19L15 19","key":"8"}),
    createElement(Path, {"d":"M18 22L15 19L18 16","key":"9"})
  );
});

BanknoteDollarArrowLeft.displayName = 'BanknoteDollarArrowLeft';

export default BanknoteDollarArrowLeft;
export { BanknoteDollarArrowLeft };
