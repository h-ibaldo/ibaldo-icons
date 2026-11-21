import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagStandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagStand: ForwardRefExoticComponent<FlagStandProps & RefAttributes<Svg>>;

export default FlagStand;
export { FlagStand };
