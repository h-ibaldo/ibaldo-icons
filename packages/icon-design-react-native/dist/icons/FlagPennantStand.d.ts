import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagPennantStandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagPennantStand: ForwardRefExoticComponent<FlagPennantStandProps & RefAttributes<Svg>>;

export default FlagPennantStand;
export { FlagPennantStand };
