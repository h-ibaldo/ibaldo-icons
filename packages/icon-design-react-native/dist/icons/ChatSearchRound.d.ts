import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSearchRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSearchRound: ForwardRefExoticComponent<ChatSearchRoundProps & RefAttributes<Svg>>;

export default ChatSearchRound;
export { ChatSearchRound };
