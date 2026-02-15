import { forwardRef } from 'react';

const HardDriveXUninstallProgramApplicationCrossedLine = forwardRef(({
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
    <path d="M17.207365314249728,8.000000000480213c-1.037841796869543-1.7916259765625-2.97119140625-3-5.190734863279431-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450970297" y1="2.000000000480213" x2="22.016630450970297" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.836820880659616,12.820190430167713c.694458007810681-.3135986328125,1.179809570310681-1.00872802734375,1.179809570310681-1.8201904296875,0-1.1046142578125-.895446777340112-2-2-2-.811462402340112,0-1.506591796880457.4853515625-1.820190429690228,1.1798095703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.78591756033984,13.000000000480213c.146362304690228-.64410400390625.230712890630457-1.3116455078125.230712890630457-2,0-4.9705810546875-4.029418945310681-9-9-9-2.739929199220569,0-5.189392089840112,1.22845458984375-6.840087890630457,3.159912109375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.404691974409616,8.388061523917713c-.25048828125.8270263671875-.388061523439319,1.703125-.388061523439319,2.6119384765625,0,.6883544921875.084350585939319,1.35589599609375.230712890619543,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.627775470499728,13.000000000480213H3.016630450970297c-.552307128910797,0-1,.44769287109375-1,1v5c0,.55224609375.447692871089203,1,1,1h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.016630450970297,20.000000000480213h1c.552307128909888,0,1-.44775390625,1-1v-5c0-.55230712890625-.447692871090112-1-1-1h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

HardDriveXUninstallProgramApplicationCrossedLine.displayName = 'HardDriveXUninstallProgramApplicationCrossedLine';

export default HardDriveXUninstallProgramApplicationCrossedLine;
export { HardDriveXUninstallProgramApplicationCrossedLine };
