import { forwardRef } from 'react';

const WebsitePortalFinanceMoneyBill = forwardRef(({
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
    <path d="M22,9.999999999998181V3.999999999998181c0-1.104569499661011-.895430500338989-2-2-2H4c-1.104569499670106,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500329894,2,2,2h1.000000003630703" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000003630921" y1="4.999999999998181" x2="5.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000003630921" y1="4.999999999998181" x2="8.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.000000003630703" y1="4.999999999998181" x2="11.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000003630703" y1="7.999999999998181" x2="22.000000003630703" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="8.025268549516113" y="12.998782739598028" width="14" height="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="15.025268549516113" cy="17.498782739598028" rx="2" ry="2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.025268549516113,12.998782739598028v1c0,.552284749832324.447715250169495,1,1,1h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.025268549516113,19.998782739598028h-1c-.552284749830505,0-1,.447715250171314-1,1v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.025268549115935,21.998782739688977l.000000000090949-1c.000000000040018-.552284749832324-.447715250081274-1.000000000040018-.999999999919964-1.000000000090949l-1-.000000000087311" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.025268549745306,14.998782739510716l1,.000000000087311c.552284749830505.000000000050932,1.000000000040018-.447715250080364,1.000000000090949-.999999999909051l.00000000008913-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WebsitePortalFinanceMoneyBill.displayName = 'WebsitePortalFinanceMoneyBill';

export default WebsitePortalFinanceMoneyBill;
export { WebsitePortalFinanceMoneyBill };
