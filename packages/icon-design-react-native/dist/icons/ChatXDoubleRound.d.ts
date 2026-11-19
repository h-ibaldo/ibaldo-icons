import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleRound: ForwardRefExoticComponent<ChatXDoubleRoundProps & RefAttributes<Svg>>;

export default ChatXDoubleRound;
export { ChatXDoubleRound };
