import { forwardRef } from 'react';

const AtSign3CircleDotsMenu = forwardRef(({
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
    <circle cx="8.000000002607521" cy="7.999999998027761" r="5.999999997576424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999999987590854" y1="7.99000000045362" x2="6.00000000018008" y2="8.000000000453838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999987590854" y1="7.99000000045362" x2="10.00000000018008" y2="8.000000000453838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.505065918159744,16.286071772946343c.611083984360448,1.022216796875,1.717407226549767,1.71392822265625,2.994934082020336,1.71392822265625,1.932983398439319,0,3.5-1.567016601561591,3.5-3.5,0-1.27752685546875-.691711425770336-2.38385009765625-1.713928222659888-2.99493408203125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.425231933770192,16.971008296383843c1.022338867189319,2.926330566407159,3.799682617189319,5.02899169921875,7.074768066409888,5.02899169921875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.00000000018008,14.499999995602593v1.5c0,1.10455322265625.895446777340112,2,2,2s2-.89544677734375,2-2v-1.5c0-3.27508544921875-2.102661132810681-6.05242919921875-5.028991699220569-7.07476806640625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.50000000018008" y1="21.999999995602593" x2="18.00000000018008" y2="21.999999995602593" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AtSign3CircleDotsMenu.displayName = 'AtSign3CircleDotsMenu';

export default AtSign3CircleDotsMenu;
export { AtSign3CircleDotsMenu };
