import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEyeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEyeRound: ForwardRefExoticComponent<ChatEyeRoundProps & RefAttributes<Svg>>;

export default ChatEyeRound;
export { ChatEyeRound };
