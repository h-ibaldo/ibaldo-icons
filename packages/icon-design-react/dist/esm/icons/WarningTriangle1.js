import { forwardRef } from 'react';

const WarningTriangle1 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <path d="M5.144270485039669,21.000000000479304h13.660921930029872c2.303468005589821,0,3.747569597209804-2.488446516097611,2.604729426369886-4.488416815068376l-6.830460965029488-11.953306688777957c-1.151682426600019-2.01544424657277-4.057776426130658-2.01544424657277-5.209458852739772,0l-6.830460965020393,11.953306688777957c-1.142840170839918,1.999970298970766.30126142077097,4.488416815068376,2.604729426389895,4.488416815068376Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WarningTriangle1.displayName = 'WarningTriangle1';

export default WarningTriangle1;
export { WarningTriangle1 };
