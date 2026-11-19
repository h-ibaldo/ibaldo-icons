import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUserBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUserBoxy: ForwardRefExoticComponent<ChatUserBoxyProps & RefAttributes<Svg>>;

export default ChatUserBoxy;
export { ChatUserBoxy };
