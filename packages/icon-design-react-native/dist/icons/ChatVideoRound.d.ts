import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideoRound: ForwardRefExoticComponent<ChatVideoRoundProps & RefAttributes<Svg>>;

export default ChatVideoRound;
export { ChatVideoRound };
