import { forwardRef } from 'react';

const SwitchPositionOff2 = forwardRef(({
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
    <rect x="1.999999974480403" y="1.997562028564843" width="4.000000042031786" height="5.999999999986386" rx="1.999998026112745" ry="1.999998026112745" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.999993373347024" y1="1.997562035419833" x2="19.999993373347024" y2="7.997562035419833" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="7.171572852409515" y="10.169134910609559" width="3.999999999995531" height="5.999999999997156" rx=".999999999993075" ry=".999999999993075" transform="translate(-6.625693103269692 10.342431670715154) rotate(-44.999999998820869)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.589752670266535,13.415741853161308c-1.063724416309924,2.229777334570826-.678881205440121,4.97797304415144,1.167606619608705,6.824460869283939,2.343154380079795,2.343154380188935,6.142126994051068,2.343154380272608,8.485281374240003.000000000189175,2.343154380190754-2.343154380087071,2.343154380270789-6.14212699404743.00000000018008-8.485281374240003-1.846487825039731-1.846487825132499-4.59468353460943-2.231331036120537-6.824460869220275-1.167606619917933" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SwitchPositionOff2.displayName = 'SwitchPositionOff2';

export default SwitchPositionOff2;
export { SwitchPositionOff2 };
