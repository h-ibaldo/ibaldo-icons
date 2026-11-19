import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipCheckShort = forwardRef(function PaperclipCheckShort(
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
    createElement(Path, {"d":"M12 14L18.172 7.828C19.277 6.723 19.277 4.934 18.172 3.828C17.066 2.723 15.277 2.723 14.172 3.828L5.449 12.551C3.516 14.484 3.516 17.617 5.449 19.551C7.383 21.484 10.516 21.484 12.449 19.551L20.895 11.105","key":"0"}),
    createElement(Path, {"d":"M2 4L4 6L8 2","key":"1"})
  );
});

PaperclipCheckShort.displayName = 'PaperclipCheckShort';

export default PaperclipCheckShort;
export { PaperclipCheckShort };
