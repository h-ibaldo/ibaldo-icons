import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextRound: ForwardRefExoticComponent<ChatTextRoundProps & RefAttributes<Svg>>;

export default ChatTextRound;
export { ChatTextRound };
