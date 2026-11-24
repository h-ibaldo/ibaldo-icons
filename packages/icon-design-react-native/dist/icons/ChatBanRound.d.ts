import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBanRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBanRound: ForwardRefExoticComponent<ChatBanRoundProps & RefAttributes<Svg>>;

export default ChatBanRound;
export { ChatBanRound };
