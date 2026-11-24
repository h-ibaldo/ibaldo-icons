import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerRound: ForwardRefExoticComponent<ChatForwardCornerRoundProps & RefAttributes<Svg>>;

export default ChatForwardCornerRound;
export { ChatForwardCornerRound };
