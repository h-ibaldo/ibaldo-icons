import { createElement, forwardRef } from 'react';

const ObserverEyeView2 = forwardRef(function ObserverEyeView2(
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
    createElement('ellipse', {"cx":"12.000000003157766","cy":"18.998782736171052","rx":"10","ry":"3","key":"0"}),
    createElement('circle', {"cx":"12.000000003157766","cy":"5.998782736171052","r":"4","key":"1"}),
    createElement('path', {"d":"M21.000000003157766,5.456668478358552c-2.3896484375-2.14312744140625-5.537353515617724-3.4578857421875-9-3.4578857421875-3.462646484367724,0-6.6103515625,1.31475830078125-9,3.4578857421875","key":"2"}),
    createElement('line', {"x1":"12.000000003157766","y1":"6.00878273617127","x2":"12.000000003157766","y2":"5.998782736171052","key":"3"}),
    createElement('path', {"d":"M2.000000003157766,18.998782736171052v-.2917960675004c0-.465735285863047.108435275262309-.925074483013304.316718427002343-1.341640786500648l5.683281572997657-11.366563145998953","key":"4"}),
    createElement('path', {"d":"M16.000000003157766,5.998782736171052l5.683281573001295,11.366563145998953c.208283151740034.416566303487343.316718426998705.8759055006376.316718426998705,1.341640786500648v.2917960675004","key":"5"})
  );
});

ObserverEyeView2.displayName = 'ObserverEyeView2';

export default ObserverEyeView2;
export { ObserverEyeView2 };
