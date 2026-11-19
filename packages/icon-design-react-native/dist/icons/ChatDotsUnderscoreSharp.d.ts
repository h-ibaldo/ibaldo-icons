import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscoreSharp: ForwardRefExoticComponent<ChatDotsUnderscoreSharpProps & RefAttributes<Svg>>;

export default ChatDotsUnderscoreSharp;
export { ChatDotsUnderscoreSharp };
