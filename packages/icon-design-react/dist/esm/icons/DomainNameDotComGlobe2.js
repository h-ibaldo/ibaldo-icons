import { forwardRef } from 'react';

const DomainNameDotComGlobe2 = forwardRef(({
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
    <polyline points="22.025268549509747 13.998782739598028 22.025268549509747 9.998782739598028 20.025268549509747 11.998782739598028 18.025268549509747 9.998782739598028 18.025268549509747 13.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.025268549509747" y="9.998782739598028" width="5" height="4" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.025268549509747,9.998782739598028h-2c-.552284749829596,0-1,.447715250171314-1,1v2c0,.552284749832324.447715250170404,1,1,1h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.676513666699975,6.998782739598028c-1.729858398440228-2.98614501953125-4.952026367190228-5-8.651245117190228-5S5.103881830759747,4.012637720066778,3.374023432319518,6.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.485717768259747,6.998782739598028c-.69189453125-2.98614501953125-1.980712890619543-5-3.46044921875-5-1.479736328119543,0-2.7685546875,2.01385498046875-3.46044921875,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.37402343255053,16.998782738823138c1.729858398159195,2.986145019684045,4.952026366729115,5.000000000443833,8.651245116729115,5.000000000774889,3.69921875.000000000334694,6.92138671893008-2.013854979846656,8.651245117640428-4.999999999221473" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.564819330979844,16.998782739288799c.69189453097988,2.986145019593096,1.980712890180257,5.000000000178261,3.4604492182998,5.000000000309228,1.479736328130457.000000000134605,2.76855468768008-2.013854980217729,3.4604492192002-4.999999999687134" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DomainNameDotComGlobe2.displayName = 'DomainNameDotComGlobe2';

export default DomainNameDotComGlobe2;
export { DomainNameDotComGlobe2 };
