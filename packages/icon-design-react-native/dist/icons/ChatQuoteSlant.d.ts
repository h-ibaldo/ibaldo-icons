import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuoteSlant: ForwardRefExoticComponent<ChatQuoteSlantProps & RefAttributes<Svg>>;

export default ChatQuoteSlant;
export { ChatQuoteSlant };
