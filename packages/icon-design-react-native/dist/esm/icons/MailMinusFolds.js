import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailMinusFolds = forwardRef(function MailMinusFolds(
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
    createElement(Path, {"d":"M13 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 13","key":"0"}),
    createElement(Path, {"d":"M2.367 5.242L12 14L21.633 5.242","key":"1"}),
    createElement(Path, {"d":"M9.801 12L2.367 18.758","key":"2"}),
    createElement(Path, {"d":"M16 17L22 17","key":"3"})
  );
});

MailMinusFolds.displayName = 'MailMinusFolds';

export default MailMinusFolds;
export { MailMinusFolds };
