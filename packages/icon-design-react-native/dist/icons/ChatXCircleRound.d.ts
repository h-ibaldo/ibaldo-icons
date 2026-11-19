import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleRound: ForwardRefExoticComponent<ChatXCircleRoundProps & RefAttributes<Svg>>;

export default ChatXCircleRound;
export { ChatXCircleRound };
