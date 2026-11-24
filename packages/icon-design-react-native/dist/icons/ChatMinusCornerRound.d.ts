import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerRound: ForwardRefExoticComponent<ChatMinusCornerRoundProps & RefAttributes<Svg>>;

export default ChatMinusCornerRound;
export { ChatMinusCornerRound };
