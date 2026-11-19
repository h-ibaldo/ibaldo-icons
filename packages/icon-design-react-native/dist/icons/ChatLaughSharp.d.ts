import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaughSharp: ForwardRefExoticComponent<ChatLaughSharpProps & RefAttributes<Svg>>;

export default ChatLaughSharp;
export { ChatLaughSharp };
