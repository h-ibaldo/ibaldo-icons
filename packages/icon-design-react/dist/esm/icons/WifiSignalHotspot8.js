import { forwardRef } from 'react';

const WifiSignalHotspot8 = forwardRef(({
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
    <circle cx="11.974731449501633" cy="12.000000000476575" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.803161625283792,14.828430176261463c.723815917967841-.72381591796875,1.171569824217841-1.723876953125,1.171569824217841-2.82843017578125s-.447692871088293-2.1046142578125-1.171569824217841-2.82843017578125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.146301273724021,9.171569824698963c-.723815917972388.72381591796875-1.171569824222388,1.723876953125-1.171569824222388,2.82843017578125s.447692871091022,2.1046142578125,1.171569824222388,2.82843017578125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.924438480751633,16.949707031730213c1.266784667972388-1.26678466796875,2.05029296875-3.0167236328125,2.05029296875-4.94970703125s-.783508300777612-3.6829833984375-2.05029296875-4.94970703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.025024418251633,7.050292969230213c-1.266784667967841,1.26678466796875-2.05029296875,3.0167236328125-2.05029296875,4.94970703125s.783508300782159,3.6829833984375,2.05029296875,4.94970703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.045776371371176,19.071044922355213c1.809631347662616-1.80963134765625,2.928955078130457-4.30963134765625,2.928955078130457-7.071044921875s-1.119323730467841-5.26141357421875-2.928955078130457-7.071044921875909" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.903686527621176,4.928955078604304c-1.809631347647155,1.809631347657159-2.928955078119543,4.309631347657159-2.928955078119543,7.071044921875909s1.119323730472388,5.26141357421875,2.928955078119543,7.071044921875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449501633" y1="22.000000000476575" x2="11.974731449501633" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WifiSignalHotspot8.displayName = 'WifiSignalHotspot8';

export default WifiSignalHotspot8;
export { WifiSignalHotspot8 };
