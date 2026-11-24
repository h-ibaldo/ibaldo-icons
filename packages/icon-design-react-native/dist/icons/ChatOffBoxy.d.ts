import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOffBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOffBoxy: ForwardRefExoticComponent<ChatOffBoxyProps & RefAttributes<Svg>>;

export default ChatOffBoxy;
export { ChatOffBoxy };
