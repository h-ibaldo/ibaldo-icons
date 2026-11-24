import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalSharp: ForwardRefExoticComponent<ChatDotsVerticalSharpProps & RefAttributes<Svg>>;

export default ChatDotsVerticalSharp;
export { ChatDotsVerticalSharp };
