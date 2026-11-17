import { createElement, forwardRef } from 'react';

const WindowLetterXBare = forwardRef(function WindowLetterXBare(
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
    createElement('rect', {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"2.000000000000045","ry":"2.000000000000045","key":"0"}),
    createElement('line', {"x1":"14.00000000018008","y1":"11.000000000448381","x2":"10.00000000018008","y2":"17.000000000448381","key":"1"}),
    createElement('line', {"x1":"10.000000000050932","y1":"11.000000000561158","x2":"14.000000000309228","y2":"17.000000000337423","key":"2"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

WindowLetterXBare.displayName = 'WindowLetterXBare';

export default WindowLetterXBare;
export { WindowLetterXBare };
