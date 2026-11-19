import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTypingWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTypingWide: ForwardRefExoticComponent<ChatTypingWideProps & RefAttributes<Svg>>;

export default ChatTypingWide;
export { ChatTypingWide };
