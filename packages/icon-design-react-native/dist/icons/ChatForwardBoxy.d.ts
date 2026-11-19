import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardBoxy: ForwardRefExoticComponent<ChatForwardBoxyProps & RefAttributes<Svg>>;

export default ChatForwardBoxy;
export { ChatForwardBoxy };
