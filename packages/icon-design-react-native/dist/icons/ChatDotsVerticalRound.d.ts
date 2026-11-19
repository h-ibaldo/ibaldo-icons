import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalRound: ForwardRefExoticComponent<ChatDotsVerticalRoundProps & RefAttributes<Svg>>;

export default ChatDotsVerticalRound;
export { ChatDotsVerticalRound };
