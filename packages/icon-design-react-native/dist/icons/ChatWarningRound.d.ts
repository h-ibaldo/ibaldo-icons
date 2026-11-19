import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWarningRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWarningRound: ForwardRefExoticComponent<ChatWarningRoundProps & RefAttributes<Svg>>;

export default ChatWarningRound;
export { ChatWarningRound };
