import { forwardRef } from 'react';

const SaveFloppyDisk1NegativeRemoveMinusDelete = forwardRef(({
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
    <path d="M21.949462885140747,14.000000000480213l-.00000000018008-6.171572875358834c-.000000000030923-.530432979616307-.21071368074081-1.039140805351053-.585786437570277-1.414213562220539l-3.82842712458114-3.828427124917653c-.375072756918598-.375072756956797-.883780582778854-.585786437713978-1.414213562518853-.58578643769215l-12.171572875600759.000000000549335c-1.104569499650097.000000000047294-1.999999999959982.895430500426301-1.999999999909051,2.000000000087311l.000000000718501,16.000000000003638c.000000000040018,1.104569499661011.895430500420844,1.999999999956344,2.000000000080036,1.999999999909051l8.999999999561624-.000000000811269" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.949462885140747 2.000000000480213 15.949462885140747 8.000000000480213 5.949462885140747 8.000000000480213 5.949462885140747 2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.949462885140747 14.000000000480213 5.949462885140747 14.000000000480213 5.949462885140747 22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.949462885140747" y1="19.000000000480213" x2="21.949462885140747" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SaveFloppyDisk1NegativeRemoveMinusDelete.displayName = 'SaveFloppyDisk1NegativeRemoveMinusDelete';

export default SaveFloppyDisk1NegativeRemoveMinusDelete;
export { SaveFloppyDisk1NegativeRemoveMinusDelete };
