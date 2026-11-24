import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuote: ForwardRefExoticComponent<ChatQuoteProps & RefAttributes<Svg>>;

export default ChatQuote;
export { ChatQuote };
