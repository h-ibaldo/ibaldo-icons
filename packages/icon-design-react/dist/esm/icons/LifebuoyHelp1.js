import { forwardRef } from 'react';

const LifebuoyHelp1 = forwardRef(({
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
    <line x1="13.967244584106083" y1="21.831826341574924" x2="13.967244584106083" y2="16.610634935324924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.967244584106083" y1="16.610634935324924" x2="9.967244584106083" y2="21.831826341574924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.967244584106083" y1="2.233681810324924" x2="9.967244584106083" y2="7.454873216574924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.967244584106083" y1="7.454873216574924" x2="13.967244584106083" y2="2.233681810324924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.545125443481083" y1="14.032754075946286" x2="21.766377884888243" y2="14.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.766377884888243" y1="10.032754075946286" x2="16.545125443481083" y2="10.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.168111283324833" y1="14.032754075946286" x2="7.389363724731083" y2="14.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.389363724731083" y1="10.032754075946286" x2="2.168111283324833" y2="10.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.967244584106083" cy="12.032754075946286" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.967244584106083" cy="12.032754075946286" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LifebuoyHelp1.displayName = 'LifebuoyHelp1';

export default LifebuoyHelp1;
export { LifebuoyHelp1 };
