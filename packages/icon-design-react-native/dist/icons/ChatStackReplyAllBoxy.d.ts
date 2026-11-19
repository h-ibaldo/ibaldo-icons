import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyAllBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllBoxy: ForwardRefExoticComponent<ChatStackReplyAllBoxyProps & RefAttributes<Svg>>;

export default ChatStackReplyAllBoxy;
export { ChatStackReplyAllBoxy };
