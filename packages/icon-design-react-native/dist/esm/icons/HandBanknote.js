import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const HandBanknote = forwardRef(function HandBanknote(
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
    createElement(Path, {"d":"M4 14L7.777 12.473C8.523 12.168 9.359 12.18 10.098 12.5L14.371 14.352C15.219 14.719 15.645 15.672 15.355 16.547C15.078 17.383 14.234 17.891 13.367 17.746L8.945 17","key":"0"}),
    createElement(Path, {"d":"M4 21L6.633 20.664L11.246 21.832C14.027 22.535 16.949 21.43 18.594 19.055L21.648 14.641C22.273 13.738 22.043 12.5 21.137 11.891C20.371 11.371 19.348 11.477 18.699 12.133L15.375 15.492","key":"1"}),
    createElement(Path, {"d":"M2 12L4 12L4 22L2 22","key":"2"}),
    createElement(Path, {"d":"M6 2L20 2L20 9L6 9Z","key":"3"}),
    createElement(Path, {"d":"M20 4C18.895 4 18 3.105 18 2","key":"4"}),
    createElement(Path, {"d":"M6 7C7.105 7 8 7.895 8 9","key":"5"}),
    createElement(Path, {"d":"M18 9C18 7.895 18.895 7 20 7","key":"6"}),
    createElement(Path, {"d":"M8 2C8 3.105 7.105 4 6 4","key":"7"}),
    createElement(Path, {"d":"M12 5.5C12 4.672 12.449 4 13 4C13.551 4 14 4.672 14 5.5C14 6.328 13.551 7 13 7C12.449 7 12 6.328 12 5.5Z","key":"8"})
  );
});

HandBanknote.displayName = 'HandBanknote';

export default HandBanknote;
export { HandBanknote };
