import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BotVisorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BotVisor: ForwardRefExoticComponent<BotVisorProps & RefAttributes<Svg>>;

export default BotVisor;
export { BotVisor };
