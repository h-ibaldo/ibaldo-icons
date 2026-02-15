import { forwardRef } from 'react';

const TrashDeleteRecycle5 = forwardRef(({
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
    <path d="M7.974731450080071,22.000000000459295h-2c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.97473145010008" y1="6.000000000462023" x2="14.97473145010008" y2="9.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731450080071" y1="6.000000000462023" x2="16.97473145010008" y2="6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <polyline points="21.974731450080071 12.000000000459295 21.974731450080071 15.000000000456566 18.974731450080071 15.000000000456566" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="10.974731450080071 21.000000000459295 10.974731450080071 18.000000000462023 13.974731450080071 18.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.552612309449614,15.000000000459295c-.772216796869543-1.764404296875-2.528686523439319-3-4.577880859369543-3-1.630493164069776,0-3.064636230470569.792236328125-3.977355957030341,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.075500493049731,18.000000000459295c.46337890625,2.282165527344659,2.480346679680224,4,4.899230957030341,4,2.047790527340112,0,3.796447753899884-1.237548828125,4.5693359375-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <line x1="6.97473145010008" y1="2.000000000459295" x2="11.97473145010008" y2="2.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TrashDeleteRecycle5.displayName = 'TrashDeleteRecycle5';

export default TrashDeleteRecycle5;
export { TrashDeleteRecycle5 };
