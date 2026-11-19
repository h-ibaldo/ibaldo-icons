import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackReplyBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyBoxy: ForwardRefExoticComponent<ChatStackReplyBoxyProps & RefAttributes<Svg>>;

export default ChatStackReplyBoxy;
export { ChatStackReplyBoxy };
