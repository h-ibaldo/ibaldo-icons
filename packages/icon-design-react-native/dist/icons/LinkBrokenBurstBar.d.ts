import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstBar: ForwardRefExoticComponent<LinkBrokenBurstBarProps & RefAttributes<Svg>>;

export default LinkBrokenBurstBar;
export { LinkBrokenBurstBar };
