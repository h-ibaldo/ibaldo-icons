import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerSharp: ForwardRefExoticComponent<ChatPlusCornerSharpProps & RefAttributes<Svg>>;

export default ChatPlusCornerSharp;
export { ChatPlusCornerSharp };
