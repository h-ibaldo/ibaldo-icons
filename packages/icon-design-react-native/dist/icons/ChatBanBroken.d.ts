import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBanBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBanBroken: ForwardRefExoticComponent<ChatBanBrokenProps & RefAttributes<Svg>>;

export default ChatBanBroken;
export { ChatBanBroken };
