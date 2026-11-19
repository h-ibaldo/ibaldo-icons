import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextBoxy: ForwardRefExoticComponent<ChatTextBoxyProps & RefAttributes<Svg>>;

export default ChatTextBoxy;
export { ChatTextBoxy };
