import { createElement, forwardRef } from 'react';

const HouseDoorArch = forwardRef(function HouseDoorArch(
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
    createElement('path', {"d":"M21.789731271930577,12.662289044712452L13.556088693811034,3.680172345493702c-.831298828130457-.906921386722388-2.26123046875-.906921386722388-3.092529296880457,0L2.229916818811034,12.662289044712452c-.467041015630457.50946044921875-.105590820310681,1.3310546875.585571289047948,1.3310546875h2.1943359375v6.00665283203125c0,.55224609375.447631835952052,1,1,1h4.220092773452052v-3.719482421871362c0-1.1044921875.8955078125-1.999877929691138,2-1.999877929691138,1.104614257797948,0,2,.895385742191138,2,1.999877929691138v3.719482421871362h3.779907226547948c.552368164071595,0,1-.44775390625,1-1v-6.00665283203125h2.1943359375c.691162109391371,0,1.052612304702052-.82159423828125.585571289071595-1.3310546875Z","key":"0"})
  );
});

HouseDoorArch.displayName = 'HouseDoorArch';

export default HouseDoorArch;
export { HouseDoorArch };
