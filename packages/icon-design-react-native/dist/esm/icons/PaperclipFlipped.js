import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipFlipped = forwardRef(function PaperclipFlipped(
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
    createElement(Path, {"d":"M12 4L3.449 12.551C1.516 14.484 1.516 17.617 3.449 19.551C5.383 21.484 8.516 21.484 10.449 19.551L20.965 9.035C22.344 7.656 22.344 5.414 20.965 4.035C19.586 2.656 17.344 2.656 15.965 4.035L7.621 12.379C6.793 13.207 6.793 14.551 7.621 15.379C8.449 16.207 9.793 16.207 10.621 15.379L17 9","key":"0"})
  );
});

PaperclipFlipped.displayName = 'PaperclipFlipped';

export default PaperclipFlipped;
export { PaperclipFlipped };
