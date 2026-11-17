import { createElement, forwardRef } from 'react';

const DotsVerticalHollow = forwardRef(function DotsVerticalHollow(
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
    createElement('rect', {"x":"10.000000070991291","y":"10.00000003806643","width":"3.999999985321212","height":"3.999999846323506","rx":"1.998805100324319","ry":"1.998805100324319","key":"0"}),
    createElement('rect', {"x":"10.000000070991064","y":"2.000000153619281","width":"3.999999985320757","height":"3.999999846337804","rx":"1.998805100337743","ry":"1.998805100337743","key":"1"}),
    createElement('rect', {"x":"10.00000007099095","y":"17.999999999999872","width":"3.999999985320985","height":"3.999999846343858","rx":"1.99880510943995","ry":"1.99880510943995","key":"2"})
  );
});

DotsVerticalHollow.displayName = 'DotsVerticalHollow';

export default DotsVerticalHollow;
export { DotsVerticalHollow };
