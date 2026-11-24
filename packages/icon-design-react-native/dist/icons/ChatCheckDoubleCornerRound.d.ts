import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerRound: ForwardRefExoticComponent<ChatCheckDoubleCornerRoundProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerRound;
export { ChatCheckDoubleCornerRound };
