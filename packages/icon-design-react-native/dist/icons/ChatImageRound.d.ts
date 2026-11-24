import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatImageRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatImageRound: ForwardRefExoticComponent<ChatImageRoundProps & RefAttributes<Svg>>;

export default ChatImageRound;
export { ChatImageRound };
