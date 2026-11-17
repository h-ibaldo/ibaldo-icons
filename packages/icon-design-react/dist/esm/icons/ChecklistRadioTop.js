import { createElement, forwardRef } from 'react';

const ChecklistRadioTop = forwardRef(function ChecklistRadioTop(
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
    createElement('line', {"x1":"10.000000000260115","y1":"4.032754075946286","x2":"22.000000000260115","y2":"4.032754075946286","key":"0"}),
    createElement('line', {"x1":"10.000000000260115","y1":"12.032754075946286","x2":"22.000000000260115","y2":"12.032754075946286","key":"1"}),
    createElement('line', {"x1":"10.000000000260115","y1":"20.032754075946286","x2":"22.000000000260115","y2":"20.032754075946286","key":"2"}),
    createElement('rect', {"x":"1.999999994798017","y":"2.032754065191796","width":"4.000000010843934","height":"3.999999993205051","rx":"1.999997988538197","ry":"1.999997988538197","key":"3"}),
    createElement('rect', {"x":"1.999999994798017","y":"10.032754060027656","width":"4.000000010843934","height":"4.000000003324601","rx":"1.999997993654768","ry":"1.999997993654768","key":"4"}),
    createElement('rect', {"x":"1.999999994798017","y":"18.032754065149959","width":"4.000000010843934","height":"3.999999993079996","rx":"1.999997992257776","ry":"1.999997992257776","key":"5"}),
    createElement('rect', {"x":"2.999999993418101","y":"3.032754077664691","width":"2.000000013603994","height":"1.99999999656319","rx":".999999020944945","ry":".999999020944945","key":"6"})
  );
});

ChecklistRadioTop.displayName = 'ChecklistRadioTop';

export default ChecklistRadioTop;
export { ChecklistRadioTop };
