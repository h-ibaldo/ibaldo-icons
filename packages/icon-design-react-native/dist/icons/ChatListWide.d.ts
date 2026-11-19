import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatListWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatListWide: ForwardRefExoticComponent<ChatListWideProps & RefAttributes<Svg>>;

export default ChatListWide;
export { ChatListWide };
