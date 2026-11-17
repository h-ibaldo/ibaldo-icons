import { createElement, forwardRef } from 'react';

const Warning1 = forwardRef(function Warning1(
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
    createElement('path', {"d":"M5.144270485039669,21.000000000479304h13.660921930029872c2.303468005589821,0,3.747569597209804-2.488446516097611,2.604729426369886-4.488416815068376l-6.830460965029488-11.953306688777957c-1.151682426600019-2.01544424657277-4.057776426130658-2.01544424657277-5.209458852739772,0l-6.830460965020393,11.953306688777957c-1.142840170839918,1.999970298970766.30126142077097,4.488416815068376,2.604729426389895,4.488416815068376Z","key":"0"})
  );
});

Warning1.displayName = 'Warning1';

export default Warning1;
export { Warning1 };
