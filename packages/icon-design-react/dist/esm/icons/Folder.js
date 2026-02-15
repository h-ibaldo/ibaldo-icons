import { forwardRef } from 'react';

const Folder = forwardRef(({
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
    <path d="M19.999999978690539,20.999999999998181H4c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.929630589660519c.66870593549902,0,1.293168239899387.334201833509724,1.664099899289795.890598573469106l.812536329360228,1.218802853061788c.370931659379494.556396739959382.995393963779861.890598573469106,1.66409989927979.890598573469106h7.929633178269796c1.104569491600159,0,1.999999987840056.895430489210412,1.999999996510269,1.999999980818757l.000000086320142,11.00000000349246c.000000008669303,1.104569505789186-.895430494210814,2.000000015688784-2,2.000000015688784Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Folder.displayName = 'Folder';

export default Folder;
export { Folder };
