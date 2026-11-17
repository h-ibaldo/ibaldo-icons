import { forwardRef } from 'react';

const Cloud2Forbidden = forwardRef(({
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
    <g>
  <circle cx="12.00000000001819" cy="16.999999973508238" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.828450520850311" y1="14.171549452668842" x2="9.171549479186069" y2="19.82845049433854" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M19.00000000001819,17.858581516467893c1.72222900390625-.446044921858629,3-1.996826171858629,3-3.858581542959655,0-1.866821289058862-1.284423828125-3.421691894540345-3.0137939453125-3.862854003898974.0015869140625-.046569824222388.0137939453125-.09014892578125.0137939453125-.137145996101026,0-2.209167480479664-1.79083251953125-4-4-4-.1370849609375,0-.2667236328125.02685546875-.4002685546875.040344238270336-.76239013671875-1.787048339829198-2.53411865234375-3.040344238270336-4.5997314453125-3.040344238270336-2.76141357421875,0-5,2.238586425770336-5,5,0,.137084960941138.029541015625.265869140628638.04034423828125.400207519520336-1.78704833984375.762390136729664-3.04034423828125,2.5341796875-3.04034423828125,4.599792480479664,0,2.049194335941138,1.235595703125,3.8056640625,3,4.577880859378638" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud2Forbidden.displayName = 'Cloud2Forbidden';

export default Cloud2Forbidden;
export { Cloud2Forbidden };
