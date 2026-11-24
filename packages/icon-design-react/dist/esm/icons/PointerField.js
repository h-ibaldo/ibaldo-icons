import { createElement, forwardRef } from 'react';

const PointerField = forwardRef(function PointerField(
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
    createElement('path', {"d":"M12.031 13.379L14.766 21.57C14.934 22.078 15.625 22.156 15.902 21.695L17.867 18.414L21.148 16.449C21.609 16.172 21.531 15.48 21.023 15.313L12.832 12.578C12.34 12.414 11.871 12.887 12.031 13.379Z","key":"0"}),
    createElement('path', {"d":"M8 12L4 12C2.895 12 2 11.105 2 10L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 11","key":"1"}),
    createElement('path', {"d":"M12 7L12 7","key":"2"}),
    createElement('path', {"d":"M7 7L7 7","key":"3"}),
    createElement('path', {"d":"M17 7L17 7","key":"4"})
  );
});

PointerField.displayName = 'PointerField';

export default PointerField;
export { PointerField };
