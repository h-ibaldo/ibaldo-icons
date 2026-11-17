import { forwardRef } from 'react';

const SwitchToggleButtonOnStripes = forwardRef(({
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
    <rect x="1.999999988019965" y="5.999996563894001" width="19.999999999999886" height="12.000000004577942" rx="5.999993987784047" ry="5.999993987784047" transform="translate(23.999999973447217 23.999993134958544) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999977100742" y1="5.999996563434252" x2="2.078063941939035" y2="12.921932598590502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.999999977100742" y1="5.999996563434252" x2="3.290222145069492" y2="15.709774395465502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.078063941939035" y1="12.921932598590502" x2="5.53424069976063" y2="17.465755840778002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.290222145069492" y1="15.709774395465502" x2="8.999999977100742" y2="17.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SwitchToggleButtonOnStripes.displayName = 'SwitchToggleButtonOnStripes';

export default SwitchToggleButtonOnStripes;
export { SwitchToggleButtonOnStripes };
