import { forwardRef } from 'react';

const ApplicationWindow1Heart3 = forwardRef(({
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
    <path d="M11.171025971240852,18.060933624409699l-2.793826842716953-2.793826842682392c-.82791149809691-.827911498090543-.827911498587127-2.170221252466945-.000000001090484-2.998132751159574l.001867247784503-.00186724778905c.827911498339745-.82791149953573,2.170221254390526-.827911500019582,2.998132753325081-.000000001075023l.500933623879973.500933623879973.500933624213758-.500933624221943c.827911499021866-.827911499033689,2.170221255318211-.827911498217873,2.998132753331447.000000001822627l.0018672481674.001867248173767c.827911496791785.82791149881723.827911495964145,2.170221252626106-.000000001847184,2.998132750422883l-2.793826842796079,2.793826842743329c-.390524291751717.390524291744441-1.023689270501563.390524291631664-1.414213562251462-.000000000114596Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000000184627" y="2.000000000448381" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow1Heart3.displayName = 'ApplicationWindow1Heart3';

export default ApplicationWindow1Heart3;
export { ApplicationWindow1Heart3 };
