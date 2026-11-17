import { forwardRef } from 'react';

const SubmitArrowCheck3 = forwardRef(({
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
    <path d="M21.974731440100186,17.000000003885361H3.974731440100186c-1.104569499660101,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500339899-2,2-2h9c1.104569499670106,0,2,.895430500338989,2,2v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.974731440100186 14.000000003885361 21.974731440100186 17.000000003885361 18.974731440100186 20.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731440100186 10.500000003885361 7.974731440100186 12.500000003885361 10.974731440100186 8.500000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SubmitArrowCheck3.displayName = 'SubmitArrowCheck3';

export default SubmitArrowCheck3;
export { SubmitArrowCheck3 };
