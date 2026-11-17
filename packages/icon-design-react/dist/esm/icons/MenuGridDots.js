import { createElement, forwardRef } from 'react';

const MenuGridDots = forwardRef(function MenuGridDots(
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
    createElement('rect', {"x":"4.000000034390609","y":"3.99999999373847","width":"1.999999941003125","height":"2.000000003035268","rx":".99999897146503","ry":".99999897146503","key":"0"}),
    createElement('rect', {"x":"11.000000024728138","y":"3.99999999373847","width":"1.999999960328068","height":"2.000000003035268","rx":".999998981127271","ry":".999998981127271","key":"1"}),
    createElement('rect', {"x":"18.000000044867988","y":"3.99999999373847","width":"1.999999920048367","height":"2.000000003035268","rx":".999998960987559","ry":".999998960987559","key":"2"}),
    createElement('rect', {"x":"4.000000034390609","y":"10.999999995906698","width":"1.999999941003125","height":"1.999999998698812","rx":".999998971101232","ry":".999998971101232","key":"3"}),
    createElement('rect', {"x":"11.000000024728138","y":"10.999999995906698","width":"1.999999960328068","height":"1.999999998698813","rx":".999998980763701","ry":".999998980763701","key":"4"}),
    createElement('rect', {"x":"18.000000044867988","y":"10.999999995906698","width":"1.999999920048367","height":"1.999999998698812","rx":".999998960623761","ry":".999998960623761","key":"5"}),
    createElement('rect', {"x":"4.000000034390609","y":"17.999999994349601","width":"1.999999941003125","height":"2.00000000181295","rx":".999998967012148","ry":".999998967012148","key":"6"}),
    createElement('rect', {"x":"11.000000024728138","y":"17.999999994349601","width":"1.999999960328068","height":"2.00000000181295","rx":".999998976674617","ry":".999998976674617","key":"7"}),
    createElement('rect', {"x":"18.000000044867988","y":"17.999999994349601","width":"1.999999920048367","height":"2.00000000181295","rx":".999998956534677","ry":".999998956534677","key":"8"})
  );
});

MenuGridDots.displayName = 'MenuGridDots';

export default MenuGridDots;
export { MenuGridDots };
