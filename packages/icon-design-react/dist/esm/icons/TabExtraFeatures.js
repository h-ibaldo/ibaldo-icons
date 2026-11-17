import { forwardRef } from 'react';

const TabExtraFeatures = forwardRef(({
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
    <path d="M9.492411646966502,1.997565476299314h7.116250915079945c.911351166319946,0,1.773289868138818.414269157099625,2.342606428330328,1.125914857337193l2.441874542459118,3.052343178074807c.425551315500343.531939144388161.657393571669672,1.192870657007006.657393571669672,1.874085142662807v.947656821925193" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.050537104505565,21.997565476299314H4.050537104505565c-1.104569499659192,0-2-.895430500338989-2-2V3.997565476299314c0-1.104569499661011.895430500340808-2,2-2h5c.91135116633086,0,1.773289868129723.414269157099625,2.342606428330328,1.125914857333555l2.198536228250305,2.74817028533289c.569316560198786.71164570023484,1.431255262010382,1.125914857333555,2.342606428329418,1.125914857333555h4.11625091508995c1.104569499661011,0,2,.895430500338989,2,2v11c0,1.104569499661011-.895430500338989,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.050537104505565" y1="5.997565476299314" x2="9.050537104505565" y2="5.997565476299314" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TabExtraFeatures.displayName = 'TabExtraFeatures';

export default TabExtraFeatures;
export { TabExtraFeatures };
