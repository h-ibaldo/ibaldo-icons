import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Contactless = forwardRef(function Contactless(
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
    createElement(Path, {"d":"M5 10.023C6.148 11.172 6.148 13.035 5 14.184","key":"0"}),
    createElement(Path, {"d":"M7.945 7.383C10.551 9.988 10.551 14.219 7.945 16.824","key":"1"}),
    createElement(Path, {"d":"M10.887 4.59C15.035 8.738 15.035 15.469 10.887 19.617","key":"2"}),
    createElement(Path, {"d":"M15 2.848C20.113 7.961 20.113 16.246 15 21.359","key":"3"})
  );
});

Contactless.displayName = 'Contactless';

export default Contactless;
export { Contactless };
