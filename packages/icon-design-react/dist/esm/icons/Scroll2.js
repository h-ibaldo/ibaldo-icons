import { forwardRef } from 'react';

const Scroll2 = forwardRef(({
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
    <path d="M17,5.999999999998181h5v-1.500002499999027c0-1.380710493871447-1.119287006140439-2.499997500000973-2.499997499999154-2.499997500000973h-.000005000001693c-1.380710493858714,0-2.499997499979145,1.119287006129525-2.499997499979145,2.499997499979145l-.000000000020009,15.000005000019883c0,1.380710493860533-1.119287006140439,2.499997500000973-2.499997499999154,2.499997500000973h-.000005000001693c-1.380710493858714,0-2.49999749998824-1.11928700612043-2.49999749998824-2.499997499979145l-.000000000010914-1.500002500020855H2v1.5c0,1.380711874580811,1.119288125421008,2.5,2.5,2.5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.500002500000846,1.999999999998181h-.000005000001693c-1.380710493858714,0-2.499997499979145,1.119287006129525-2.499997499979145,2.499997499979145l-.000000000020009,13.500005000019883" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.5" y1="1.999999999998181" x2="19.5" y2="1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="5.999999999998181" x2="13" y2="5.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="9.999999999998181" x2="13" y2="9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="13.999999999998181" x2="13" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Scroll2.displayName = 'Scroll2';

export default Scroll2;
export { Scroll2 };
