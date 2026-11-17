import { createElement, forwardRef } from 'react';

const Bell5Square = forwardRef(function Bell5Square(
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
    createElement('rect', {"x":"1.974731449505271","y":"2.000000000480213","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('path', {"d":"M15.974731449505271,12.000000000480213v-2.000003999979526c0-2.209136790203047-1.790859209821065-3.999996000020474-3.999996000020474-3.999996000020474h-.000007999991794c-2.209136790188495,0-3.999995999998646,1.790859209799237-3.999996000016836,3.999995999987732l-.000000000021828,2.000004000012268-.963533202520921,1.445299803770467c-.443036486478377.664554729719384.033354909890477,1.554700196229533.83205029434248,1.554700196229533h8.262965816407814c.798695384452003,0,1.275086780820857-.890145466510148.83205029434248-1.554700196229533l-.963533202520921-1.445299803770467Z","key":"1"}),
    createElement('line', {"x1":"10.974731449505271","y1":"18.000000000480213","x2":"12.974731449505271","y2":"18.000000000480213","key":"2"})
  );
});

Bell5Square.displayName = 'Bell5Square';

export default Bell5Square;
export { Bell5Square };
