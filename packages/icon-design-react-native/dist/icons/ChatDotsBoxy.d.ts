import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsBoxy: ForwardRefExoticComponent<ChatDotsBoxyProps & RefAttributes<Svg>>;

export default ChatDotsBoxy;
export { ChatDotsBoxy };
