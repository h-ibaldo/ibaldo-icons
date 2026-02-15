import { forwardRef } from 'react';

const ListIonsCheckXQuestionMarkMaybe = forwardRef(({
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
    <line x1="11.000000004469257" y1="3.000000003886271" x2="22.000000004469257" y2="3.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.000000004469257 3.000000003886271 4.000000004469257 5.000000003886271 7.000000004469257 1.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.118737004069772" y1="11.000000003885361" x2="22.118737004069772" y2="11.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.118737004069772" y1="19.000000003885361" x2="22.118737004069772" y2="19.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.118737004069772" y1="9.000000003888999" x2="2.118737004069772" y2="13.000000003888999" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.118737003989736" y1="9.000000003976311" x2="6.118737004160721" y2="13.000000003798959" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000004469257" y1="21.990000003885143" x2="4.000000004469257" y2="22.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.000000004469257,17.000000003885361h1.500001500000508c.828426296309772,0,1.499998499999492.671572203682445,1.499998499999492,1.49999850000404v.000003000001016c0,.828426296316138-.67157220368972,1.499998499994945-1.499998499999492,1.499998499994945h-.500001500000508" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ListIonsCheckXQuestionMarkMaybe.displayName = 'ListIonsCheckXQuestionMarkMaybe';

export default ListIonsCheckXQuestionMarkMaybe;
export { ListIonsCheckXQuestionMarkMaybe };
