import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarRound: ForwardRefExoticComponent<ChatStarRoundProps & RefAttributes<Svg>>;

export default ChatStarRound;
export { ChatStarRound };
