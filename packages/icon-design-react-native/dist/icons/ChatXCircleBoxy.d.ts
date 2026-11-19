import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleBoxy: ForwardRefExoticComponent<ChatXCircleBoxyProps & RefAttributes<Svg>>;

export default ChatXCircleBoxy;
export { ChatXCircleBoxy };
