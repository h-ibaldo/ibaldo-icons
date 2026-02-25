import { forwardRef } from 'react';

const WallpaperPictureDashed2 = forwardRef(({
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
    <path d="M22.016630450165394,19.999999999577994v.000002000000677c-.000000000100044,1.104568388793268-.895429611386135,1.999997999919287-1.999998000179403,1.999997999817424h-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.016630451825222,1.99999999935244h.000001999999768c1.104568388748703.000000000145519,1.999997999874722.895429611431609,1.999997999731931,1.999998000268533v.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.016630449985314" y1="21.999999998297426" x2="10.016630449985314" y2="21.999999998475687" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.016630449985314" y1="21.999999998835847" x2="16.016630449962577" y2="21.999999999017746" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.016630451779747" y1="1.999999998319254" x2="10.016630451779747" y2="1.999999998497515" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.016630451779747" y1="1.999999998857675" x2="16.016630451758829" y2="1.999999999039574" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630451242236" y1="7.999999997780833" x2="2.016630451061246" y2="9.999999997780833" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630450702905" y1="13.999999997780833" x2="2.016630450524644" y2="15.999999997759005" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.016630451220408" y1="7.999999999577994" x2="22.016630451040328" y2="9.999999999577994" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.016630450681987" y1="13.999999999577994" x2="22.016630450501907" y2="15.999999999556167" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.016630451598758,3.999999997737177v-.000002000000677c.000000000100954-1.104568388749612.895429611388863-1.999997999875632,1.999998000181222-1.999997999821062h.000001999999768" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.01663044993802,21.999999997962732h-.000001999997039c-1.104568388749612-.000000000101863-1.999997999875632-.895429611387954-1.999997999731931-1.999998000268533v-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.016630450973025" cy="8.000000000480213" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.016630450973025 17.000000000480213 15.016630450973025 11.000000000480213 11.016630450973025 17.000000000480213 8.016630450973025 14.000000000480213 5.016630450973025 17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WallpaperPictureDashed2.displayName = 'WallpaperPictureDashed2';

export default WallpaperPictureDashed2;
export { WallpaperPictureDashed2 };
