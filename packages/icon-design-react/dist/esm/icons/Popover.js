import { createElement, forwardRef } from 'react';

const Popover = forwardRef(function Popover(
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
    createElement('path', {"d":"M19,20h-5.000000238899702l-1.999999761100298,2-1.999999761090294-2h-5.000000238909706c-1.104569499660101,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500339899-2,2-2h14c1.104569499660101,0,2,.895430500338989,2,2v14c0,1.104569499661011-.895430500339899,2-2,2Z","key":"0"}),
    createElement('line', {"x1":"8","y1":"7","x2":"16","y2":"7","key":"1"}),
    createElement('line', {"x1":"8","y1":"11","x2":"16","y2":"11","key":"2"}),
    createElement('line', {"x1":"8","y1":"15","x2":"16","y2":"15","key":"3"})
  );
});

Popover.displayName = 'Popover';

export default Popover;
export { Popover };
