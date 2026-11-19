import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleRound: ForwardRefExoticComponent<ChatCheckDoubleRoundProps & RefAttributes<Svg>>;

export default ChatCheckDoubleRound;
export { ChatCheckDoubleRound };
