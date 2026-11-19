import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextOffBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextOffBoxy: ForwardRefExoticComponent<ChatTextOffBoxyProps & RefAttributes<Svg>>;

export default ChatTextOffBoxy;
export { ChatTextOffBoxy };
