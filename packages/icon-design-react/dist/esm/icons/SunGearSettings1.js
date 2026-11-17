import { forwardRef } from 'react';

const SunGearSettings1 = forwardRef(({
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
    <circle cx="16.999999990796823" cy="17.000000000448381" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990796823" y1="17.010000000448599" x2="16.999999990796823" y2="17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990796823" y1="12.000000000448381" x2="16.999999990796823" y2="13.500000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990796823" y1="20.500000000448381" x2="16.999999990796823" y2="22.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999990796823" y1="17.000000000448381" x2="20.499999990796823" y2="17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.499999990796823" y1="17.000000000448381" x2="11.999999990796823" y2="17.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.535533896808374" y1="20.535533906298951" x2="19.474873725005637" y2="19.474873734544417" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.5251262565871" y1="14.525126266351435" x2="13.464466084788" y2="13.464466094593263" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.464466084945343" y1="20.535533906458113" x2="14.525126256700787" y2="19.474873734655375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.474873724895588" y1="14.525126266237748" x2="20.535533896651941" y2="13.464466094434101" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999990797733" y1="14.000000000448381" x2="4.999999990796823" y2="19.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999990796823" y1="5.000000000448381" x2="4.999999990796823" y2="7.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990796823" y1="4.000000000448381" x2="2.999999990796823" y2="13.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990796823" y1="8.000000000448381" x2="4.999999990796823" y2="15.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.999999990796823 10.000000000448381 18.999999990796823 9.000000000448381 18.999999990796823 5.000000000448381 14.999999990796823 5.000000000448381 11.999999990796823 2.000000000448381 8.999999990796823 5.000000000448381 4.999999990796823 5.000000000448381 4.999999990796823 9.000000000448381 1.999999990796823 12.000000000448381 4.999999990796823 15.000000000448381 4.999999990796823 19.000000000448381 8.999999990796823 19.000000000448381 9.999999990796823 20.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SunGearSettings1.displayName = 'SunGearSettings1';

export default SunGearSettings1;
export { SunGearSettings1 };
