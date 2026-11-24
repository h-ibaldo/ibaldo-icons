import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUserBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUserBroken: ForwardRefExoticComponent<ChatUserBrokenProps & RefAttributes<Svg>>;

export default ChatUserBroken;
export { ChatUserBroken };
