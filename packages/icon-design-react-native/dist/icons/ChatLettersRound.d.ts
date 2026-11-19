import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersRound: ForwardRefExoticComponent<ChatLettersRoundProps & RefAttributes<Svg>>;

export default ChatLettersRound;
export { ChatLettersRound };
