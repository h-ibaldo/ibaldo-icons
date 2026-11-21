import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RocketUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RocketUp: ForwardRefExoticComponent<RocketUpProps & RefAttributes<Svg>>;

export default RocketUp;
export { RocketUp };
