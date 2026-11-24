import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleTall: ForwardRefExoticComponent<ChatPlusCircleTallProps & RefAttributes<Svg>>;

export default ChatPlusCircleTall;
export { ChatPlusCircleTall };
