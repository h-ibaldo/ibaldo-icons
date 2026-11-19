import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBanSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBanSharp: ForwardRefExoticComponent<ChatBanSharpProps & RefAttributes<Svg>>;

export default ChatBanSharp;
export { ChatBanSharp };
