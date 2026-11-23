import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailPlusRounded = forwardRef(function MailPlusRounded(
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
    createElement(Path, {"d":"M13 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 12","key":"0"}),
    createElement(Path, {"d":"M6 9L11.359 13.465C11.73 13.777 12.27 13.777 12.641 13.465L18 9","key":"1"}),
    createElement(Path, {"d":"M16 17L22 17","key":"2"}),
    createElement(Path, {"d":"M19 14L19 20","key":"3"})
  );
});

MailPlusRounded.displayName = 'MailPlusRounded';

export default MailPlusRounded;
export { MailPlusRounded };
