import { createElement, forwardRef } from 'react';

const ButtonBubble1 = forwardRef(function ButtonBubble1(
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
    createElement('rect', {"x":"1.999999995185732","y":"6.999999997010121","width":"19.999999999999943","height":"10.000000007293295","rx":"4.99999501106799","ry":"4.99999501106799","key":"0"}),
    createElement('line', {"x1":"6.999999990797733","y1":"11.000000000448381","x2":"16.999999990797733","y2":"11.000000000448381","key":"1"})
  );
});

ButtonBubble1.displayName = 'ButtonBubble1';

export default ButtonBubble1;
export { ButtonBubble1 };
