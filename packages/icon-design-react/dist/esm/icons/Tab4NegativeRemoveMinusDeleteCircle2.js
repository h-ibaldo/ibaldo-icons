import { forwardRef } from 'react';

const Tab4NegativeRemoveMinusDeleteCircle2 = forwardRef(({
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
    <path d="M12,21.999999999998181l-8,.000000000000909c-1.104569499670106,0-2-.895430500338989-2-2V3.999999999999091c0-1.104569499661011.895430500329894-2,2-2h2c.62951460666045,0,1.222291236000274.296388314665819,1.59999999998945.799999999999272l2.100000000010368,2.799999999998363c.188854381990495.251805842669455.485242696659952.400000000002365.800000000000182.400000000002365h9.5c1.104569499660101,0,2,.895430500338989,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6,1.999999999999091h6c.62951460666045,0,1.222291236000274.296388314665819,1.59999999998945.799999999999272l2.40000000001055,3.200000000000728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12,1.999999999999091h6c.62951460666045,0,1.222291236000274.296388314665819,1.59999999998945.799999999999272l1.800000000001091,2.400000000001455c.389466384409388.51928851253615.600000000009459,1.150889359323628.600000000009459,1.799999999999272v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16" y1="18.999999999995453" x2="22" y2="18.999999999995453" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab4NegativeRemoveMinusDeleteCircle2.displayName = 'Tab4NegativeRemoveMinusDeleteCircle2';

export default Tab4NegativeRemoveMinusDeleteCircle2;
export { Tab4NegativeRemoveMinusDeleteCircle2 };
