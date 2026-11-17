import { forwardRef } from 'react';

const AnimatedDiamondMoving2 = forwardRef(({
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
    <polyline points="16.999999981009751 2.999996562450178 11.999999981000656 11.99999656244654 16.999999981009751 20.999996562450178" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.999999981009751 2.99999656244654 6.999999981000656 11.999996562450178 11.999999981009751 20.99999656244654" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.999999981009751 20.999996562450178 21.999999981009751 11.99999656244654 16.999999981009751 2.999996562450178" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <line x1="2.009999981000874" y1="11.999996562442902" x2="1.999999981000656" y2="11.99999656244654" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.009999982090449" y1="2.999996563046807" x2="6.99999998209023" y2="2.999996563046807" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.676666648389073" y1="8.999996562846718" x2="3.666666648390674" y2="8.999996562846718" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.333333314689298" y1="5.999996562642991" x2="5.34333331470043" y2="5.999996562646629" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <line x1="7.009999982090449" y1="20.999996561846274" x2="6.99999998209023" y2="20.999996561846274" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.676666648389073" y1="14.999996562042725" x2="3.666666648390674" y2="14.999996562042725" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.333333314689298" y1="17.999996562250089" x2="5.34333331470043" y2="17.999996562246452" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AnimatedDiamondMoving2.displayName = 'AnimatedDiamondMoving2';

export default AnimatedDiamondMoving2;
export { AnimatedDiamondMoving2 };
