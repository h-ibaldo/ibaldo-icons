import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailLinkClip = forwardRef(function MailLinkClip(
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
    createElement(Path, {"d":"M9 16L3 16C2.449 16 2 15.555 2 15L2 3C2 2.445 2.449 2 3 2L21 2C21.551 2 22 2.445 22 3L22 9","key":"0"}),
    createElement(Path, {"d":"M3.109 3L12 11L20.887 3","key":"1"}),
    createElement(Path, {"d":"M20 18L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16 14","key":"2"}),
    createElement(Path, {"d":"M14 16L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L18 20","key":"3"}),
    createElement(Path, {"d":"M18 16L16 18","key":"4"})
  );
});

MailLinkClip.displayName = 'MailLinkClip';

export default MailLinkClip;
export { MailLinkClip };
