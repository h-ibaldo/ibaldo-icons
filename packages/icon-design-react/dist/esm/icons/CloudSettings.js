import { forwardRef } from 'react';

const CloudSettings = forwardRef(({
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
    <path d="M19.999999999989086,16.435730006947779c1.190673828121362-.689636230459655,2-1.9599609375,2-3.435729980459655,0-2.20916748046875-1.790771484378638-4-4-4h-.025146484378638c.014892578128638-.164916992200233.025146484378638-.331176757808862.025146484378638-.5,0-3.037536621090112-2.46240234375-5.5-5.5-5.5-2.138427734378638,0-3.987365722659888,1.222900390610448-4.897277832038526,3.00518798828125-.034545898430224-.000610351571595-.068054199211474-.00518798828125-.102722167961474-.00518798828125-3.037536621099207,0-5.5,2.462463378909888-5.5,5.5,0,1.703369140610448.783447265621362,3.214233398441138,2,4.22198486328125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <circle cx="11.999999999984993" cy="17.000000026485395" r="3.500000000003507" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999999989086" y1="16.990000026487905" x2="11.999999999989086" y2="17.000000026488124" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.106756913279241" y1="12.372297506379255" x2="10.674729839291103" y2="13.760608262397" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.325270160679793" y1="20.239391790568334" x2="13.893243086698931" y2="21.627702546587898" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.627702520099774" y1="15.106756939778279" x2="15.239391764060201" y2="15.674729865788322" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.760608235908876" y1="18.325270187187925" x2="7.372297479880217" y2="18.893243113197968" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.611004858359593" y1="18.933554834617098" x2="15.22770340084935" y2="18.353488392178406" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.772296599119727" y1="15.646511660786928" x2="7.388995141609485" y2="15.066445218359149" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.066445191860112" y1="21.61100488485863" x2="10.646511634300623" y2="20.227703427348388" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.353488365679368" y1="13.772296625618765" x2="13.933554808119879" y2="12.388995168108522" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

CloudSettings.displayName = 'CloudSettings';

export default CloudSettings;
export { CloudSettings };
