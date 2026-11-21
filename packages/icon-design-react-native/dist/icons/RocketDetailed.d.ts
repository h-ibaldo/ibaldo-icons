import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RocketDetailedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RocketDetailed: ForwardRefExoticComponent<RocketDetailedProps & RefAttributes<Svg>>;

export default RocketDetailed;
export { RocketDetailed };
