import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BookNote = forwardRef(function BookNote(
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
    createElement(Path, {"d":"M18 17L6 17C4.895 17 4 17.895 4 19C4 20.105 4.895 21 6 21L18 21","key":"0"}),
    createElement(Path, {"d":"M18 17L18 13","key":"1"}),
    createElement(Path, {"d":"M10 3L6 3C4.895 3 4 3.895 4 5","key":"2"}),
    createElement(Path, {"d":"M4 5L4 19","key":"3"}),
    createElement(Path, {"d":"M21 10.949C21 12.082 20.082 13 18.949 13","key":"4"}),
    createElement(Path, {"d":"M18.789 13L12.211 13C10.988 13 10 12.012 10 10.789L10 4.211C10 2.988 10.988 2 12.211 2L18.789 2C20.012 2 21 2.988 21 4.211L21 10.789C21 12.012 20.012 13 18.789 13Z","key":"5"}),
    createElement(Path, {"d":"M15 13C15 9.688 17.688 7 21 7","key":"6"}),
    createElement(Path, {"d":"M14 6L14 6","key":"7"})
  );
});

BookNote.displayName = 'BookNote';

export default BookNote;
export { BookNote };
