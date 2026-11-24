import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartBroken: ForwardRefExoticComponent<ChatHeartBrokenProps & RefAttributes<Svg>>;

export default ChatHeartBroken;
export { ChatHeartBroken };
