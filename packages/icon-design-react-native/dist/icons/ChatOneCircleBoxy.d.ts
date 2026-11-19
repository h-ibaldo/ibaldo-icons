import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleBoxy: ForwardRefExoticComponent<ChatOneCircleBoxyProps & RefAttributes<Svg>>;

export default ChatOneCircleBoxy;
export { ChatOneCircleBoxy };
