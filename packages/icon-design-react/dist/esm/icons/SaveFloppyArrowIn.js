import { forwardRef } from 'react';

const SaveFloppyArrowIn = forwardRef(({
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
    <path d="M12.949462885140747,22.000000000931323l7.000000000451109-.000000000811269c1.104569499661011-.000000000050932,1.999999999959982-.895430500429939,1.999999999909051-2.000000000090949l-.000000000549335-12.171572874907724c-.000000000021828-.530432979616307-.210713680724439-1.039140805351053-.585786437561183-1.414213562220539l-3.828427124575683-3.828427124917653c-.375072756924055-.375072756956797-.88378058278613-.585786437713978-1.414213562526129-.58578643769215l-12.17157287559894.000000000549335c-1.104569499661011.000000000047294-1.999999999959982.895430500426301-1.999999999909051,2.000000000087311l.000000000811269,9.999999999552529" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.949462885140747 2.000000000480213 15.949462885140747 8.000000000480213 5.949462885140747 8.000000000480213 5.949462885140747 2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.949462885140747 22.000000000480213 17.949462885140747 14.000000000480213 11.949462885140747 14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885140747 22.000000000480213 9.949462885140747 19.000000000480213 6.949462885140747 16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885140747" y1="19.000000000480213" x2="9.949462885140747" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SaveFloppyArrowIn.displayName = 'SaveFloppyArrowIn';

export default SaveFloppyArrowIn;
export { SaveFloppyArrowIn };
