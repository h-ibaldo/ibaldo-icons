import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuoteSharp: ForwardRefExoticComponent<ChatQuoteSharpProps & RefAttributes<Svg>>;

export default ChatQuoteSharp;
export { ChatQuoteSharp };
