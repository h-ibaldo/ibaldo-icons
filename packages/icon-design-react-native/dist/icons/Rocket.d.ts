import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Rocket: ForwardRefExoticComponent<RocketProps & RefAttributes<Svg>>;

export default Rocket;
export { Rocket };
