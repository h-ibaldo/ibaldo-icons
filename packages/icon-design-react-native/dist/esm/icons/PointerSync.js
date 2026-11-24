import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerSync = forwardRef(function PointerSync(
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
    createElement(Path, {"d":"M12.898 5.406L2.781 2.246C2.449 2.141 2.141 2.449 2.242 2.781L5.406 12.898C5.574 13.434 6.316 13.426 6.492 12.891C7.48 9.871 9.867 7.48 12.891 6.492C13.426 6.316 13.434 5.574 12.898 5.406Z","key":"0"}),
    createElement(Path, {"d":"M11.84 20.32L13 18","key":"1"}),
    createElement(Path, {"d":"M19 14L20.16 11.684","key":"2"}),
    createElement(Path, {"d":"M16 22C19.313 22 22 19.313 22 16C22 14.305 21.293 12.773 20.16 11.684","key":"3"}),
    createElement(Path, {"d":"M16 10C12.688 10 10 12.688 10 16C10 17.695 10.707 19.227 11.84 20.316","key":"4"})
  );
});

PointerSync.displayName = 'PointerSync';

export default PointerSync;
export { PointerSync };
