import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoRound: ForwardRefExoticComponent<ChatInfoRoundProps & RefAttributes<Svg>>;

export default ChatInfoRound;
export { ChatInfoRound };
