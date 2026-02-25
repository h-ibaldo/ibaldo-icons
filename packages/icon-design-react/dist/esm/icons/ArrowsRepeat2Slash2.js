import { forwardRef } from 'react';

const ArrowsRepeat2Slash2 = forwardRef(({
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
    <polyline points="22 16.99999999955071 19.000000000130967 19.999999999690772 16 16.999999999821739" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.99999999973079" y1="2" x2="1.99999999973079" y2="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <path d="M18.99999999973079,20v-11c0-1.159729003898974-.28662109375-2.2509765625-.785888671875-3.214172363279431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.84582519504329,3.154174804692047c-1.1041259765625-.727844238282159-2.424560546875-1.154174804692047-3.8458251953125-1.154174804692047h-2.999999999865395" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <polyline points="1.99999999973079 6.999999999470674 4.999999999869033 3.999999999599822 7.99999999973079 6.99999999973079" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <path d="M5.00000000026921,3.999999999290594l-.000000000985892,11c-.000000000105501,1.159729003898974.286621093546273,2.250976562520009.785888671584871,3.214172363350372" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.154174803444221,20.845825194879581c1.104125976497926.727844238381294,2.424560546772227,1.154174804911236,3.845825195209727,1.154174805031289l3.000000001211447.00000000008913" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

ArrowsRepeat2Slash2.displayName = 'ArrowsRepeat2Slash2';

export default ArrowsRepeat2Slash2;
export { ArrowsRepeat2Slash2 };
