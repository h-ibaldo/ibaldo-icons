import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleBoxy: ForwardRefExoticComponent<ChatMinusCircleBoxyProps & RefAttributes<Svg>>;

export default ChatMinusCircleBoxy;
export { ChatMinusCircleBoxy };
