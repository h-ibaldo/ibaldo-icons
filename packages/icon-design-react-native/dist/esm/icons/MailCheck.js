import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailCheck = forwardRef(function MailCheck(
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
    createElement(Path, {"d":"M14 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 12","key":"0"}),
    createElement(Path, {"d":"M2.332 5.266L11.375 12.5C11.742 12.793 12.258 12.793 12.625 12.5L21.668 5.266","key":"1"}),
    createElement(Path, {"d":"M22 15L18 19L16 17","key":"2"})
  );
});

MailCheck.displayName = 'MailCheck';

export default MailCheck;
export { MailCheck };
