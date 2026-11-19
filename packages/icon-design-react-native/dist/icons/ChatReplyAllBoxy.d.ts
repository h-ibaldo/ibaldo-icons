import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatReplyAllBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllBoxy: ForwardRefExoticComponent<ChatReplyAllBoxyProps & RefAttributes<Svg>>;

export default ChatReplyAllBoxy;
export { ChatReplyAllBoxy };
