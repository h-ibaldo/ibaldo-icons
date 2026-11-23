import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BotXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BotX: ForwardRefExoticComponent<BotXProps & RefAttributes<Svg>>;

export default BotX;
export { BotX };
