import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscoreRound: ForwardRefExoticComponent<ChatDotsUnderscoreRoundProps & RefAttributes<Svg>>;

export default ChatDotsUnderscoreRound;
export { ChatDotsUnderscoreRound };
