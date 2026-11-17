import { createElement, forwardRef } from 'react';

const TagBarsTilted = forwardRef(function TagBarsTilted(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M20 5L20 10.586C20 10.852 19.895 11.105 19.707 11.293L10.707 20.293C10.316 20.684 9.684 20.684 9.293 20.293L3.707 14.707C3.316 14.316 3.316 13.684 3.707 13.293L12.707 4.293C12.895 4.105 13.148 4 13.414 4L19 4C19.551 4 20 4.449 20 5Z","key":"0"}),
    createElement('path', {"d":"M15.5 9C15.777 9 16 8.777 16 8.5C16 8.223 15.777 8 15.5 8C15.223 8 15 8.223 15 8.5C15 8.777 15.223 9 15.5 9Z","key":"1"}),
    createElement('path', {"d":"M11 11L13 13","key":"2"}),
    createElement('path', {"d":"M8.5 13.5L10.5 15.5","key":"3"})
  );
});

TagBarsTilted.displayName = 'TagBarsTilted';

export default TagBarsTilted;
export { TagBarsTilted };
