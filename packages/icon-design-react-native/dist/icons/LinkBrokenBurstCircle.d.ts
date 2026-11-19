import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstCircle: ForwardRefExoticComponent<LinkBrokenBurstCircleProps & RefAttributes<Svg>>;

export default LinkBrokenBurstCircle;
export { LinkBrokenBurstCircle };
