import { forwardRef } from 'react';

const BookBookmark12 = forwardRef(({
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
    <line x1="20.000000026695488" y1="16.999999999989086" x2="20.000000026695488" y2="21.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.000000026695488,3.000000004819412l2.999999999092324-.000000003909008c.552284750185208-.000000000502951,1.000000000907676.447715249806606,1.000000000907676,1v11.999999999087777c0,.552284749830505-.447715250169495,1-1,1H5.499997526687366c-1.380710493860533,0-2.499997499991878,1.119287006129525-2.499997499991878,2.499997499990059v.000005000008969c0,1.380710493860533,1.119287006127706,2.499997499991878,2.499997499982783,2.499997499991878h15.500002500017217" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.000000026695488,19.499997499999154V5.500000011857992c0-1.380711873469409,1.119288123863953-2.499999998350177,2.499999997337-2.499999999608917l5.500000002663-.000000007429662" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000026695488" y1="2.999999999998181" x2="7.000000026695488" y2="16.999999999989086" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="11.000000026695488 1.999999999998181 11.000000026695488 9.999999999998181 14.000000026695488 7.999999999998181 17.000000026695488 9.999999999998181 17.000000026695488 1.999999999998181 11.000000026695488 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BookBookmark12.displayName = 'BookBookmark12';

export default BookBookmark12;
export { BookBookmark12 };
