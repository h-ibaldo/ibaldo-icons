import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCornerRound: ForwardRefExoticComponent<ChatXCornerRoundProps & RefAttributes<Svg>>;

export default ChatXCornerRound;
export { ChatXCornerRound };
