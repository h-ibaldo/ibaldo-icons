import { forwardRef } from 'react';

const ProgressSpinnerLoadingDots1 = forwardRef(({
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
    <line x1="11.949462885142566" y1="4.000000000480213" x2="11.959462885140965" y2="4.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.959462885142784" y1="20.000000000480213" x2="11.949462885140747" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.959462885142784" y1="12.000000000120053" x2="3.949462885142566" y2="12.000000000120053" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.302608635776778" y1="6.343145750859549" x2="6.29260863577565" y2="6.343145750859549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.606317134506753" y1="17.65685425009724" x2="17.616317134505152" y2="17.656854250100878" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.302608635267461" y1="17.656854249591561" x2="6.292608635267243" y2="17.656854249591561" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.606317135014251" y1="6.343145751365228" x2="17.616317135014469" y2="6.343145751368866" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ProgressSpinnerLoadingDots1.displayName = 'ProgressSpinnerLoadingDots1';

export default ProgressSpinnerLoadingDots1;
export { ProgressSpinnerLoadingDots1 };
