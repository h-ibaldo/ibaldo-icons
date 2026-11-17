import { createElement, forwardRef } from 'react';

const SliderLevel4 = forwardRef(function SliderLevel4(
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
    createElement('path', {"d":"M12.999938941939035,13.999996563434252h8.000061035159888c.552307128911707,0,1-.44775390625,1-1v-2c0-.55230712890625-.447692871088293-1-1-1h-8","key":"0"}),
    createElement('path', {"d":"M6.999999977098923,9.999996563434252H2.999999977098923c-.552307128909888,0-1,.44769287109375-1,1v2c0,.55224609375.447692871090112,1,1,1h4.000061035161707","key":"1"}),
    createElement('rect', {"x":"6.999999977098923","y":"6.999996563434252","width":"6","height":"10","rx":"2","ry":"2","key":"2"})
  );
});

SliderLevel4.displayName = 'SliderLevel4';

export default SliderLevel4;
export { SliderLevel4 };
