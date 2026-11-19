import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkXNotched = forwardRef(function LinkXNotched(
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
    createElement(Path, {"d":"M16 8L8 16","key":"0"}),
    createElement(Path, {"d":"M10.996 13.004L10.996 13C9.34 11.344 6.656 11.344 5 13L3.242 14.758C1.586 16.414 1.586 19.098 3.242 20.754L3.246 20.758C4.902 22.414 7.586 22.414 9.242 20.758L11 19C11.887 18.113 12.281 16.938 12.223 15.777","key":"1"}),
    createElement(Path, {"d":"M15.781 12.219C16.938 12.281 18.117 11.883 19 11L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L13 5C11.344 6.656 11.344 9.34 13 10.996L13.004 10.996","key":"2"}),
    createElement(Path, {"d":"M17 21L21 17","key":"3"}),
    createElement(Path, {"d":"M17 17L21 21","key":"4"})
  );
});

LinkXNotched.displayName = 'LinkXNotched';

export default LinkXNotched;
export { LinkXNotched };
