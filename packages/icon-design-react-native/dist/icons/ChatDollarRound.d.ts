import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarRound: ForwardRefExoticComponent<ChatDollarRoundProps & RefAttributes<Svg>>;

export default ChatDollarRound;
export { ChatDollarRound };
