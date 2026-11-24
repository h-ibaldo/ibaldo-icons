import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEqualsRound: ForwardRefExoticComponent<ChatEqualsRoundProps & RefAttributes<Svg>>;

export default ChatEqualsRound;
export { ChatEqualsRound };
