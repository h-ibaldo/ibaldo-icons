import { forwardRef } from 'react';

const DownloadDashedCircle = forwardRef(({
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
    <polyline points="14.974731450030959 13.000000000462023 11.974731449356113 16.000000000462023 8.974731450030959 13.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.9747314511078" y1="8.000000000462023" x2="11.974731449356113" y2="16.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.634460453936299,17.51184081772135c.743225097657159,1.1224365234375,1.705993652344659,2.085205078125,2.828430175782159,2.82843017578125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.175598149248799,9.99999999740885c-.1312255859375.646301269532159-.200866699217841,1.315002441407159-.200866699217841,2,0,.68499755859375.069641113280341,1.35369873046875.200866699217841,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.462890629718459,3.659729001316009c-1.1224365234375.743225097655341-2.085205078125,1.705993652342841-2.828430175782159,2.828430175780341" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.067167566010539,21.855528187800701c.646301269530341.131225585936591,1.315002441405341.200866699217841,2,.200866699217841.342590332030341,0,.681091308592841-.0174560546875,1.0147705078125-.05126953125,5.046142578125-.50860595703125,8.9852294921875-4.768493652342841,8.9852294921875-9.94873046875,0-5.18023681640625-3.9390869140625-9.440124511717841-8.9852294921875-9.94873046875-.333679199219659-.0338134765625-.672180175782159-.05126953125-1.0147705078125-.05126953125-.684997558594659,0-1.353698730469659.069641113282159-2,.20086669921875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DownloadDashedCircle.displayName = 'DownloadDashedCircle';

export default DownloadDashedCircle;
export { DownloadDashedCircle };
