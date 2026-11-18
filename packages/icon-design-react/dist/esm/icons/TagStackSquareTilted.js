import { createElement, forwardRef } from 'react';

const TagStackSquareTilted = forwardRef(function TagStackSquareTilted(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M7 13L7 9L11 9L16 14L12 18Z","key":"1"}),
    createElement('path', {"d":"M9 6L13 6L18 11","key":"2"})
  );
});

TagStackSquareTilted.displayName = 'TagStackSquareTilted';

export default TagStackSquareTilted;
export { TagStackSquareTilted };
