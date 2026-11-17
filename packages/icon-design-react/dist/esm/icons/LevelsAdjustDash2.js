import { forwardRef } from 'react';

const LevelsAdjustDash2 = forwardRef(({
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
    <circle cx="9.00000000019736" cy="17.000000019904292" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.00000000019736" y1="17.000000019904292" x2="22.000000000193722" y2="17.000000019904292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000194632" y1="17.000000019904292" x2="6.000000000194632" y2="17.000000019904292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.000000000193722" cy="7.000000019904292" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000000193722" y1="7.000000019904292" x2="2.00000000019736" y2="7.000000019904292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.000000000194632" y1="7.000000019904292" x2="18.000000000194632" y2="7.000000019904292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LevelsAdjustDash2.displayName = 'LevelsAdjustDash2';

export default LevelsAdjustDash2;
export { LevelsAdjustDash2 };
