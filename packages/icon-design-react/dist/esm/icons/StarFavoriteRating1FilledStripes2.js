import { forwardRef } from 'react';

const StarFavoriteRating1FilledStripes2 = forwardRef(({
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
    <line x1="21.972290038969732" y1="10.002502441854631" x2="19.544799804600189" y2="12.429931641073381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.966674804600189" y1="15.008117676229631" x2="13.173706054600189" y2="18.801025391073381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.490478515530413" y1="20.48425293013679" x2="17.947631835850189" y2="18.027160644979631" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.187377929600189" y1="8.787353516073381" x2="6.028076171780413" y2="17.94665527388679" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.42382812490996" y1="21.55090332076179" x2="19.187377929600189" y2="8.787353516073381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.010978108819472" y1="2.976379394979631" x2="9.891105061949929" y2="6.096191406698381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.235953694759701" y1="13.75134277388679" x2="14.036368733819472" y2="5.950988769979631" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.255493163969732" y1="8.787353516073381" x2="3.974731445219732" y2="12.068115234823381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.158505846639855,3.288025224145713l1.786832907830103,5.499306224124666h5.782312754189661c1.205764230210661,0,1.707096568540692,1.542942284321725.731612815090557,2.251672716583926l-4.677989284929936,3.398758161051774,1.786832907830103,5.499306224129214c.372601638349806,1.146749928258942-.939903463050541,2.100340702648282-1.915387216500676,1.39161027038881l-4.677989284929936-3.398758161052683-4.677989284929936,3.398758161052683c-.975483753450135.708730432259472-2.287988854849573-.244860342129869-1.915387216499767-1.39161027038881l1.786832907830103-5.499306224129214-4.677989284929936-3.398758161051774c-.975483753450135-.7087304322622-.474151415120105-2.251672716583926.731612815089647-2.251672716583926h5.782312754190571l1.786832907830103-5.499306224124666c.372601638349806-1.14674992826076,1.994947164489531-1.14674992826076,2.367548802839337,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

StarFavoriteRating1FilledStripes2.displayName = 'StarFavoriteRating1FilledStripes2';

export default StarFavoriteRating1FilledStripes2;
export { StarFavoriteRating1FilledStripes2 };
