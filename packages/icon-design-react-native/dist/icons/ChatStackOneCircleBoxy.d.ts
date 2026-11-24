import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackOneCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleBoxy: ForwardRefExoticComponent<ChatStackOneCircleBoxyProps & RefAttributes<Svg>>;

export default ChatStackOneCircleBoxy;
export { ChatStackOneCircleBoxy };
