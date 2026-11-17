import { createElement, forwardRef } from 'react';

const Newspaper4 = forwardRef(function Newspaper4(
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
    createElement('polygon', {"points":"21.999988083716744 21.936828613277612 1.999988083716744 21.936828613277612 1.999988083716744 1.936828613277612 3.999988083716744 2.936828613277612 5.999988083716744 1.936828613277612 7.999988083716744 2.936828613277612 9.999988083716744 1.936828613277612 11.999988083716744 2.936828613277612 13.999991219036019 1.936828613277612 15.999988017745636 2.936828613277612 17.999988050734828 1.936828613277612 19.999988017745636 2.936828613277612 21.999988017745636 1.936828613277612 21.999988083716744 21.936828613277612","key":"0"}),
    createElement('rect', {"x":"5.999988017745636","y":"6.936828613277612","width":"12","height":"3","key":"1"}),
    createElement('line', {"x1":"13.999988017745636","y1":"13.936828613277612","x2":"17.999988017745636","y2":"13.936828613277612","key":"2"}),
    createElement('line', {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"9.999988017745636","y2":"13.936828613277612","key":"3"}),
    createElement('line', {"x1":"13.999988017745636","y1":"17.936828613277612","x2":"17.999988017745636","y2":"17.936828613277612","key":"4"}),
    createElement('line', {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"9.999988017745636","y2":"17.936828613277612","key":"5"})
  );
});

Newspaper4.displayName = 'Newspaper4';

export default Newspaper4;
export { Newspaper4 };
