import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleRound: ForwardRefExoticComponent<ChatPlusCircleRoundProps & RefAttributes<Svg>>;

export default ChatPlusCircleRound;
export { ChatPlusCircleRound };
