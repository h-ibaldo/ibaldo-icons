import { createElement, forwardRef } from 'react';

const Key7 = forwardRef(function Key7(
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
    createElement('circle', {"cx":"6.000019575949409","cy":"12.000015258789062","r":"4","key":"0"}),
    createElement('line', {"x1":"22.000019575949409","y1":"12.000015258789062","x2":"10.000019575949409","y2":"12.000015258789062","key":"1"}),
    createElement('line', {"x1":"20.000019575949409","y1":"16.000015258789062","x2":"20.000019575949409","y2":"12.000015258789062","key":"2"}),
    createElement('line', {"x1":"16.000019575949409","y1":"16.000015258789062","x2":"16.000019575949409","y2":"12.000015258789062","key":"3"})
  );
});

Key7.displayName = 'Key7';

export default Key7;
export { Key7 };
