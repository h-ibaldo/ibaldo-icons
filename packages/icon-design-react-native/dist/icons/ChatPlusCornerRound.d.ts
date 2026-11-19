import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerRound: ForwardRefExoticComponent<ChatPlusCornerRoundProps & RefAttributes<Svg>>;

export default ChatPlusCornerRound;
export { ChatPlusCornerRound };
