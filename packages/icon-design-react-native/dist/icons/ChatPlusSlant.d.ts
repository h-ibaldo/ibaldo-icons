import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusSlant: ForwardRefExoticComponent<ChatPlusSlantProps & RefAttributes<Svg>>;

export default ChatPlusSlant;
export { ChatPlusSlant };
