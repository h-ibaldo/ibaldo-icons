import { forwardRef } from 'react';

const List = forwardRef(({
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
    <line x1="9.974731449547107" y1="4.000000000570253" x2="21.974731449547107" y2="4.000000000570253" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449547107" y1="12.000000000571163" x2="21.974731449547107" y2="12.000000000571163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449547107" y1="20.000000000571163" x2="21.974731449547107" y2="20.000000000571163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731449459796" y="2.000000000661203" width="4.000000000087311" height="3.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731449459796" y="10.000000000571163" width="4.000000000087311" height="3.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731449459796" y="18.000000000571163" width="4.000000000087311" height="3.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

List.displayName = 'List';

export default List;
export { List };
