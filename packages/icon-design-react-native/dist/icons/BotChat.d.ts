import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BotChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BotChat: ForwardRefExoticComponent<BotChatProps & RefAttributes<Svg>>;

export default BotChat;
export { BotChat };
