import { forwardRef } from 'react';

const TouchScreenSwipeRightSquare2 = forwardRef(({
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
    <polyline points="18.999999993773599 14.998779299643502 21.999999993642632 11.998779299508897 18.999999993513484 8.998779299643502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999993642632" y1="11.998779299865419" x2="21.999999993642632" y2="11.998779299508897" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="9.999999993638085" cy="11.998779300046408" r="4.000000000002728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999999993873644,16.998779299236048l.000000000129148,3c.000000000050932,1.104569499661011-.895430500258954,2.000000000040018-1.999999999909051,2.000000000090949l-16,.000000000716682c-1.104569499661011.000000000050932-2.000000000040018-.89543050024804-2.000000000090949-1.999999999909051l-.00000000072032-16c-.000000000049113-1.104569499661011.895430500249859-2.000000000040018,1.99999999991087-2.000000000090949l16-.000000000716682c1.104569499659192-.000000000050932,2.000000000040018.89543050024804,2.00000000008913,1.999999999909051l.000000000130967,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenSwipeRightSquare2.displayName = 'TouchScreenSwipeRightSquare2';

export default TouchScreenSwipeRightSquare2;
export { TouchScreenSwipeRightSquare2 };
