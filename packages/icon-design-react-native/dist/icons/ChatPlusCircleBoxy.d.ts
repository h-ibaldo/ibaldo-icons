import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleBoxy: ForwardRefExoticComponent<ChatPlusCircleBoxyProps & RefAttributes<Svg>>;

export default ChatPlusCircleBoxy;
export { ChatPlusCircleBoxy };
