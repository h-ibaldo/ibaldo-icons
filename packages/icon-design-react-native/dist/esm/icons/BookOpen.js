import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookOpen = forwardRef(function BookOpen(
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
    createElement(Path, {"d":"M12 21L12.09 20.734C12.633 19.102 14.16 18 15.883 18L21 18C21.551 18 22 17.551 22 17L22 5C22 4.449 21.551 4 21 4L15.883 4C14.16 4 12.633 5.102 12.09 6.734L12 7L11.91 6.734C11.367 5.102 9.84 4 8.117 4L3 4C2.449 4 2 4.449 2 5L2 17C2 17.551 2.449 18 3 18L8.117 18C9.84 18 11.367 19.102 11.91 20.734Z","key":"0"})
  );
});

BookOpen.displayName = 'BookOpen';

export default BookOpen;
export { BookOpen };
