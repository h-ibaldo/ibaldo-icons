import { createElement, forwardRef } from 'react';

const FlameTriangleDrop = forwardRef(function FlameTriangleDrop(
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
    createElement('path', {"d":"M10.719 4.094L2.395 17.719C1.785 18.719 2.504 20 3.676 20L20.324 20C21.496 20 22.215 18.719 21.605 17.719L13.281 4.094C12.695 3.137 11.305 3.137 10.719 4.094Z","key":"0"}),
    createElement('path', {"d":"M12 9C10 11 9 12.656 9 14.5C9 16.156 10.344 17 12 17C13.656 17 15 16.156 15 14.5C15 12.656 14 11 12 9","key":"1"}),
    createElement('path', {"d":"M12 17L12 15","key":"2"})
  );
});

FlameTriangleDrop.displayName = 'FlameTriangleDrop';

export default FlameTriangleDrop;
export { FlameTriangleDrop };
