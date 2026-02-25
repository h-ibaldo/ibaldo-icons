import { forwardRef } from 'react';

const LinkPersonalHotspotCheckChecked2 = forwardRef(({
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
    <path d="M3.684997562779245,8.261657715323963c-1.040466308588293.916259765625-1.710266113279431,2.24298095703125-1.710266113279431,3.73834228515625,0,2.76141357421875,2.238586425779431,5,5,5h5c2.761413574220569,0,5-2.23858642578125,5-5s-2.238586425779431-5-5-5h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.264465335889327,10.738342286287661c1.040466308670148-.916259765530413,1.710266113481339-2.242980956874817,1.710266113610487-3.738342284999817.000000000260115-2.761413574219659-2.238586425330141-5.000000000201908-4.999999999548891-5.0000000004502l-5-.00000000044929c-2.761413574220569-.000000000248292-5.000000000190994,2.23858642533196-5.000000000451109,4.9999999995498-.000000000249202,2.76141357421875,2.238586425330141,5.000000000203727,4.99999999955071,5.000000000451109l1,.000000000090949" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.974731449499814 20.000000000480213 17.974731449499814 22.000000000480213 21.974731449499814 18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LinkPersonalHotspotCheckChecked2.displayName = 'LinkPersonalHotspotCheckChecked2';

export default LinkPersonalHotspotCheckChecked2;
export { LinkPersonalHotspotCheckChecked2 };
