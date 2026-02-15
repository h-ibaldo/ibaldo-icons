import { forwardRef } from 'react';

const ChartLineSquare3ArrowIn2 = forwardRef(({
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
    <path d="M1.949462885142566,9.000000001829903l.00000000072032,8c.000000000248292,2.761423749150708,2.238576251294035,4.999999999799911,5.000000000447471,4.999999999548891l10-.000000000898581c2.761423749149799-.000000000251021,4.999999999800821-2.238576251300401,4.999999999552529-5.000000000451109l-.000000000898581-10c-.000000000247383-2.761423749150708-2.238576251296763-4.999999999799911-5.000000000447471-4.999999999548891l-4.999999999105057.000000000538421" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.949462885411776 6.000000000927685 7.949462885411776 4.000000000927685 5.949462885411776 2.000000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885411776" y1="4.000000000927685" x2="7.949462885411776" y2="4.000000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885411776 12.000000000927685 9.949462885411776 16.000000000927685 13.949462885411776 8.000000000927685 16.949462885411776 12.000000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartLineSquare3ArrowIn2.displayName = 'ChartLineSquare3ArrowIn2';

export default ChartLineSquare3ArrowIn2;
export { ChartLineSquare3ArrowIn2 };
