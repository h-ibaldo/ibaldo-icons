import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagPennantLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagPennantLeft: ForwardRefExoticComponent<FlagPennantLeftProps & RefAttributes<Svg>>;

export default FlagPennantLeft;
export { FlagPennantLeft };
