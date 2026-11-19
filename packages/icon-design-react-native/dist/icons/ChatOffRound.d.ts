import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOffRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOffRound: ForwardRefExoticComponent<ChatOffRoundProps & RefAttributes<Svg>>;

export default ChatOffRound;
export { ChatOffRound };
