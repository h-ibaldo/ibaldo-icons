import { forwardRef } from 'react';

const TrashDeleteRecycle1 = forwardRef(({
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
    <polyline points="22.0252685457599 3.999999999728971 15.0252685457599 4.000000000042746 15.025268545668951 2.000000000042746 9.025268545668951 2.000000000313776 9.0252685457599 4.000000000313776 2.0252685457599 4.000000000626642" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.0252685457599,3.999999999818101l.00000000072032,16c.000000000049113,1.104569499661011-.895430500249859,2.000000000041837-1.99999999991087,2.00000000009004l-12,.00000000054024c-1.104569499659192.000000000047294-2.000000000040018-.895430500248949-2.00000000008913-1.999999999912689l-.00000000072032-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <path d="M13.665161124230508,11.000000000042746l-.831787109371362-1.330871582030341c-.373291015628638-.597229003907159-1.242919921878638-.597229003907159-1.6162109375,0l-.206787109378638.330871582030341" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.135375967980508,13.000000000042746l-.963623046871362,1.541931152344659c-.396728515628638.634704589842841.0595703125,1.458068847655341.80810546875,1.458068847655341h.54541015625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.025268546109146,16.000000000042746h2.04541015625c.74853515625,0,1.204833984371362-.8233642578125.80810546875-1.458068847655341l-.338623046878638-.541931152344659" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

TrashDeleteRecycle1.displayName = 'TrashDeleteRecycle1';

export default TrashDeleteRecycle1;
export { TrashDeleteRecycle1 };
