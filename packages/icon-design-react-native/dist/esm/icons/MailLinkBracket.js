import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailLinkBracket = forwardRef(function MailLinkBracket(
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
    createElement(Path, {"d":"M6 17L3 17C2.449 17 2 16.555 2 16L2 4C2 3.445 2.449 3 3 3L21 3C21.551 3 22 3.445 22 4L22 12","key":"0"}),
    createElement(Path, {"d":"M3.109 4L10.664 10.797C11.422 11.48 12.578 11.48 13.34 10.797L20.887 4","key":"1"}),
    createElement(Path, {"d":"M14 18L18 18","key":"2"}),
    createElement(Path, {"d":"M14 21L13 21C11.344 21 10 19.656 10 18C10 16.344 11.344 15 13 15L14 15","key":"3"}),
    createElement(Path, {"d":"M18 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21L18 21","key":"4"})
  );
});

MailLinkBracket.displayName = 'MailLinkBracket';

export default MailLinkBracket;
export { MailLinkBracket };
