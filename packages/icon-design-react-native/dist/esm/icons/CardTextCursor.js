import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CardTextCursor = forwardRef(function CardTextCursor(
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
    createElement(Path, {"d":"M22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L11 22","key":"0"}),
    createElement(Path, {"d":"M21 14.637L12.57 11.57C11.949 11.344 11.344 11.949 11.57 12.57L14.637 21C14.789 21.414 15.344 21.48 15.59 21.113L17 19L20 22L22 20L19 17L21.113 15.59C21.48 15.344 21.414 14.789 21 14.637Z","key":"1"}),
    createElement(Path, {"d":"M6 15L8 15","key":"2"}),
    createElement(Path, {"d":"M6 11L8 11","key":"3"}),
    createElement(Path, {"d":"M6 7L16 7","key":"4"})
  );
});

CardTextCursor.displayName = 'CardTextCursor';

export default CardTextCursor;
export { CardTextCursor };
