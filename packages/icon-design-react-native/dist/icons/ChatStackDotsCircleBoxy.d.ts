import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCircleBoxy: ForwardRefExoticComponent<ChatStackDotsCircleBoxyProps & RefAttributes<Svg>>;

export default ChatStackDotsCircleBoxy;
export { ChatStackDotsCircleBoxy };
