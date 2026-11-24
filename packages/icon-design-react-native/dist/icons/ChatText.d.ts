import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatText: ForwardRefExoticComponent<ChatTextProps & RefAttributes<Svg>>;

export default ChatText;
export { ChatText };
