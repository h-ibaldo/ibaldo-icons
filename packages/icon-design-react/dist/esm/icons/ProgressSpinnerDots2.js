import { forwardRef } from 'react';

const ProgressSpinnerDots2 = forwardRef(({
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
    <circle cx="11.949462885142566" cy="4.000000000480213" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885142566" cy="20.000000000480213" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="6.292608635777924" cy="6.343145750863187" r="1.000000000000169" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.606317134507663" cy="6.343145750859549" r="1.000000000000169" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="6.292608635777242" cy="17.65685425009724" r=".999999999999847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="19.949462885142566" y="12.000000000116415" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="3.949462885144385" cy="12.000000000836735" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="19.939462885142348 12.000000000116415 19.949462885142566 12.000000000116415 19.949462885142566 12.000000000116415 19.949462885142566 12.000000000116415 19.939462885142348 12.000000000116415" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="17.606317134506753" y="17.656854250100878" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="17.596317134506535 17.656854250100878 17.606317134506753 17.656854250100878 17.606317134506753 17.656854250100878 17.606317134506753 17.656854250100878 17.596317134506535 17.656854250100878" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="3.949462885144385" cy="12.000000000836735" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ProgressSpinnerDots2.displayName = 'ProgressSpinnerDots2';

export default ProgressSpinnerDots2;
export { ProgressSpinnerDots2 };
