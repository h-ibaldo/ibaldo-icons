import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MailEdit = forwardRef(function MailEdit(
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
    createElement(Path, {"d":"M9 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 8","key":"0"}),
    createElement(Path, {"d":"M2.332 2.266L11.375 9.5C11.742 9.793 12.258 9.793 12.625 9.5L21.668 2.266","key":"1"}),
    createElement(Path, {"d":"M21.379 11.621L21.375 11.621C20.547 10.793 19.207 10.793 18.379 11.621L11 19L11 22L14 22L21.379 14.621C22.207 13.793 22.207 12.449 21.379 11.621Z","key":"2"}),
    createElement(Path, {"d":"M16.879 13.121L19.879 16.121","key":"3"})
  );
});

MailEdit.displayName = 'MailEdit';

export default MailEdit;
export { MailEdit };
