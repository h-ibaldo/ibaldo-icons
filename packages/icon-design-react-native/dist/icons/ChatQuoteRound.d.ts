import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuoteRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuoteRound: ForwardRefExoticComponent<ChatQuoteRoundProps & RefAttributes<Svg>>;

export default ChatQuoteRound;
export { ChatQuoteRound };
