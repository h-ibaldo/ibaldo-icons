import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXSharp: ForwardRefExoticComponent<ChatXSharpProps & RefAttributes<Svg>>;

export default ChatXSharp;
export { ChatXSharp };
