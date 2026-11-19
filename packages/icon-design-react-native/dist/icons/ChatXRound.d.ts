import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXRound: ForwardRefExoticComponent<ChatXRoundProps & RefAttributes<Svg>>;

export default ChatXRound;
export { ChatXRound };
