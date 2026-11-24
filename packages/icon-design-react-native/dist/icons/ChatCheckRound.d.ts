import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckRound: ForwardRefExoticComponent<ChatCheckRoundProps & RefAttributes<Svg>>;

export default ChatCheckRound;
export { ChatCheckRound };
