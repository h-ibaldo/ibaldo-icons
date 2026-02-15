import { forwardRef } from 'react';

const QuestionMarkCircleHelp1 = forwardRef(({
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
    <circle cx="12.000000000224645" cy="12.032754075946286" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <path d="M10.000000000224645,10.032754075946286v-.000002000000677c0-1.104568403690791.895429604908713-1.999997999999323,1.999998000000232-1.999997999999323h.000004000004992c1.104568395079696,0,1.99999799998659.895429604897799,1.999997999990228,1.999997999977495v.00000300001193c.000000000002728.640288606449758-.25435365854446,1.254352658561402-.707106074087278,1.707105074099672l-1.292893925908174,1.292893925910903" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12.000000000224645" y1="16.042754075946505" x2="12.000000000224645" y2="16.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

QuestionMarkCircleHelp1.displayName = 'QuestionMarkCircleHelp1';

export default QuestionMarkCircleHelp1;
export { QuestionMarkCircleHelp1 };
