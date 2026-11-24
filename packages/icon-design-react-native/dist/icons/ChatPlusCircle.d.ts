import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircle: ForwardRefExoticComponent<ChatPlusCircleProps & RefAttributes<Svg>>;

export default ChatPlusCircle;
export { ChatPlusCircle };
