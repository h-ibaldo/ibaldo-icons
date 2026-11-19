import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHash: ForwardRefExoticComponent<ChatHashProps & RefAttributes<Svg>>;

export default ChatHash;
export { ChatHash };
