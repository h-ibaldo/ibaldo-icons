import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOffSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOffSharp: ForwardRefExoticComponent<ChatOffSharpProps & RefAttributes<Svg>>;

export default ChatOffSharp;
export { ChatOffSharp };
