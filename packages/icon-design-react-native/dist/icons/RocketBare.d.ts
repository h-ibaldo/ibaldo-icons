import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RocketBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RocketBare: ForwardRefExoticComponent<RocketBareProps & RefAttributes<Svg>>;

export default RocketBare;
export { RocketBare };
