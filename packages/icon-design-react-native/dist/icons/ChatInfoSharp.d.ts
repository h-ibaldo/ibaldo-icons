import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoSharp: ForwardRefExoticComponent<ChatInfoSharpProps & RefAttributes<Svg>>;

export default ChatInfoSharp;
export { ChatInfoSharp };
