import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleBoxy: ForwardRefExoticComponent<ChatCheckCircleBoxyProps & RefAttributes<Svg>>;

export default ChatCheckCircleBoxy;
export { ChatCheckCircleBoxy };
