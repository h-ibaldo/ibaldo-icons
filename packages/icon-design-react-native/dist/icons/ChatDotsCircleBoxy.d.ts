import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleBoxy: ForwardRefExoticComponent<ChatDotsCircleBoxyProps & RefAttributes<Svg>>;

export default ChatDotsCircleBoxy;
export { ChatDotsCircleBoxy };
