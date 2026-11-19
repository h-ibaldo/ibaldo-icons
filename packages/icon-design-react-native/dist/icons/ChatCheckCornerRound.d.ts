import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerRound: ForwardRefExoticComponent<ChatCheckCornerRoundProps & RefAttributes<Svg>>;

export default ChatCheckCornerRound;
export { ChatCheckCornerRound };
