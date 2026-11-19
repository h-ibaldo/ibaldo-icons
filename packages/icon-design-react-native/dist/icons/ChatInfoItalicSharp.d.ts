import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoItalicSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoItalicSharp: ForwardRefExoticComponent<ChatInfoItalicSharpProps & RefAttributes<Svg>>;

export default ChatInfoItalicSharp;
export { ChatInfoItalicSharp };
