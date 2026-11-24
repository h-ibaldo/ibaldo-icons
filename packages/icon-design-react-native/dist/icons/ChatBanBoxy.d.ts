import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBanBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBanBoxy: ForwardRefExoticComponent<ChatBanBoxyProps & RefAttributes<Svg>>;

export default ChatBanBoxy;
export { ChatBanBoxy };
