import { forwardRef } from 'react';

const ArrowsUpOutput12 = forwardRef(({
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
    <path d="M1.974731449505271,18.000000000480213v2c0,1.104569499661011.895430500338989,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.974731449905448 4.000000000659384 11.974731450083709 2.000000000479304 9.974731449905448 4.000000000301952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="3.974731449505271 6.000000000401997 1.974731449505271 8.000000000400178 3.974731449505271 10.000000000400178" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731449505271,8.000000000400178h2.999999999869033c1.656854249471508,0,2.999999999970896,1.343145750473923,3,2.99999999994543l.000000000130967,6.999999999952706" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.974731449145111 6.000000000355612 21.97473144923606 8.000000000265572 19.974731449323372 10.000000000356522" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.97473144923606,8.000000000265572l-2.999999999872671.000000000134605c-1.65685424946787.000000000076398-2.999999999909051,1.343145750608528-2.999999999858119,3.000000000080036l.000000000178261,6.999999999952706" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450083709" y1="2.000000000479304" x2="11.974731448923194" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsUpOutput12.displayName = 'ArrowsUpOutput12';

export default ArrowsUpOutput12;
export { ArrowsUpOutput12 };
