import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyBoxy: ForwardRefExoticComponent<ChatReplyBoxyProps & RefAttributes<Svg>>;

export default ChatReplyBoxy;
export { ChatReplyBoxy };
