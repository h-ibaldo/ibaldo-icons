import { forwardRef } from 'react';

const PagesLinesTermsAndConditions12 = forwardRef(({
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
    <rect x="7.025268548599342" y="5.998779303362426" width="15" height="16" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.025268548599342,5.998779303362426v-3c0-.552284749829596-.447715250169495-1-1-1H3.025268548599342c-.552284749830505,0-1,.447715250170404-1,1v14c0,.552284749831415.447715250169495,1,1,1h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.025268548599342" y1="9.998779303362426" x2="18.025268548599342" y2="9.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.025268548599342" y1="13.998779303362426" x2="18.025268548599342" y2="13.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.025268548599342" y1="17.998779303362426" x2="18.025268548599342" y2="17.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PagesLinesTermsAndConditions12.displayName = 'PagesLinesTermsAndConditions12';

export default PagesLinesTermsAndConditions12;
export { PagesLinesTermsAndConditions12 };
