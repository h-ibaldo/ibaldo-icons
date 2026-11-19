import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyWide: ForwardRefExoticComponent<ChatReplyWideProps & RefAttributes<Svg>>;

export default ChatReplyWide;
export { ChatReplyWide };
