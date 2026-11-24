import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaughSlant: ForwardRefExoticComponent<ChatLaughSlantProps & RefAttributes<Svg>>;

export default ChatLaughSlant;
export { ChatLaughSlant };
