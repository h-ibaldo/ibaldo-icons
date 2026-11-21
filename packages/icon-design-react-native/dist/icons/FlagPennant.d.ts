import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagPennantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagPennant: ForwardRefExoticComponent<FlagPennantProps & RefAttributes<Svg>>;

export default FlagPennant;
export { FlagPennant };
