import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BotCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BotCheck: ForwardRefExoticComponent<BotCheckProps & RefAttributes<Svg>>;

export default BotCheck;
export { BotCheck };
