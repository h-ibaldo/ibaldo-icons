import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BotMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BotMinus: ForwardRefExoticComponent<BotMinusProps & RefAttributes<Svg>>;

export default BotMinus;
export { BotMinus };
