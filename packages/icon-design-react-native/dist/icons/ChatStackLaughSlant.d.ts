import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLaughSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughSlant: ForwardRefExoticComponent<ChatStackLaughSlantProps & RefAttributes<Svg>>;

export default ChatStackLaughSlant;
export { ChatStackLaughSlant };
